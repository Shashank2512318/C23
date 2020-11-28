const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myengine, myworld;
var box1, box2;
var ground1;

function setup() {
  createCanvas(800,400);

  myengine=Engine.create();
  myworld=myengine.world;

  box1= new box(230, 100, 50, 80); 
  box2= new box(200, 200, 50, 50);
  
  ground1= new ground(400, 390, 800, 20);
 
}

function draw() {
  background(0); 
  Engine.update(myengine);

  box1.display();
  box2.display();
  ground1.display();
  
console.log(box1.body.angle);

}
