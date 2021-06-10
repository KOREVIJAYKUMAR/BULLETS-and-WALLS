var bullet,wall;
var speed,weight;
var thickness;

function setup()
 {

  createCanvas(800,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(20, 200, 100, 10);
 
  wall=createSprite(750, 200, thickness, height/2);
  wall.shapeColor="80,80,80";


}

function draw() {

  background(000000);
 
  if(keyDown(RIGHT_ARROW)){
    
     bullet.velocityX = speed;

  }

  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){ 
  bullet.velocityX=0;  
  bullet.x=740;  
  var damage=(0.5 * weight * speed* speed) /( thickness* thickness* thickness);
 // var deformation=0.5 * weight * speed* speed/22500;
  console.log(damage);
   if(damage<10)
   {
       wall.shapeColor=color(255,0,0);
   }  
   else if(damage>10)
   {
       wall.shapeColor=color(0,128,0);
   }

 
}

  
  drawSprites();



}










