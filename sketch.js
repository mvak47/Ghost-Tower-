var tower,towerImage;
var ghostImage,ghost;
var door,doorImage;
var climber,climberImage;

function preload(){
  towerImage = loadImage("tower.png");
  ghostImage = loadAnimation("ghost-jumping.png","ghost-standing.png");
  doorImage = loadImage("door.png");
  climberImage = loadImage("climber.png")
  
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,10,10);
  ghost.addAnimation("ghost",ghostImage);
  ghost.scale = 0.5;
 }
function draw(){
  background("white");
  if(keyDown("space")){
    ghost.velocityY=-4;
    
  }
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-2;
    }
    if(keyDown("right_arrow")){
      ghost.x=ghost.x+2;
    }
   ghost.velocityY=ghost.velocityY+1;
  
  if(tower.y>400){
    tower.y = 300;
    
  }
  
  
  drawSprites();
}

function spwandoors(){
  if
  
  
  
}
