
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    stone = new Stone(300,350,100,100);
    ground = new Ground(400,height,800,20);
    hammer = new Hammer(400,300,200,25);
    rubber = new Rubber(600,685,100,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  stone.display();
  ground.display();
  hammer.display();
  rubber.display();
 
}



