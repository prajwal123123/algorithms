var fixedRect,movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(300,200,30,100);
  fixedRect.shapeColor= "blue";
  movingRect= createSprite(300,800,100,50);
  movingRect.shapeColor="blue";
 movingRect.velocityY=-5;
fixedRect.velocityY=+5;

}

function draw() {
  background("skyblue"); 
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
  
   if( movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    &&  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 ){
   
    movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
 
  drawSprites();
}