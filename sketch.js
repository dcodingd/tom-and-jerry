
var canvas,bg
var together,cat,catimage1,catimage2,mouse,mouseimage1,mouseimage2,mouseimage3,mouseimage4,catimage3,catimage4

function preload() {
    //load the images here
bg=loadImage("images/garden.png")
catimage1=loadAnimation("images/cat1.png")
catimage2=loadAnimation("images/cat2.png","images/cat3.png")
catimage3=loadAnimation("images/cat4.png")
mouseimage1=loadAnimation("images/mouse1.png")
mouseimage2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimage3=loadAnimation("images/mouse4.png")
}

function setup(){
  canvas=createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(200,600);
mouse.addAnimation("mousestanding", mouseimage1)
mouse.scale=0.15
cat=createSprite(900,600);
cat.addAnimation("catsleeping", catimage1)
cat.scale=0.25
makecatwalk()
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catlastimage",catimage3)
        cat.x=300
        cat.scale=0.2;
        cat.changeAnimation("catlastimage")
        mouse.changeAnimation("mouselastimage", mouseimage3)
        mouse.scale=0.15
        mouse.changeAnimation("mmouselastimage")

    }
    drawSprites();
}


function makecatwalk(){

  //For moving and changing animation write code here
    mouse.addAnimation("mouseteasing",mouseimage2)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25;
    cat.velocityX=-5;
    cat.addAnimation("catrunning",catimage2)
    cat.changeAnimation("catrunning")

}
