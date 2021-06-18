var bgImg , tajImg, clickImg , mpImg;
function preload(){

bgImg = loadImage("download.jpg") ;

tajImg = loadImage("TajMahal.png");

clickImg = loadImage("click.png");

mpImg = loadImage("machuPicchu.png");

}

function setup() {
  createCanvas(800,800);
  
click1 = createSprite(450,205)

click1.addImage(clickImg)

click1.scale = 0.4 ;

  
click2 = createButton("click me ")

click2.position(450,400)

click2.mousePressed(()=>{

location.replace("tajmahal.html");

}) ;

}

function draw() {
  background(bgImg); 
  image(tajImg,200,100,200,200);
  image(mpImg,200,300,150,150);
 
  drawSprites();
}

function mouseClicked(){



}