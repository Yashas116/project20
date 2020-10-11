var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
}

function draw() {
  background(255,255,255);
  car.velocityX=speed;
  if(car.y-wall.y===wall.weight/2+car.width/2){
    car.shapeColor=(250,0,0);
  }
  drawSprites();
}