
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,40);
	greentree = new Tree(600, 500, 400, 400)
	boy = new Boy(185, 630, 200, 240)
	greyStone = new Stone(90, 150, 20, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 greentree.display();
 boy.display();
 greyStone.display();
}



