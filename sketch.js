const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof;
	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body,roof.body,-bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2, 0)
	bobObject1 = new Bob(200, 600, 50);
	bobObject2 = new Bob(300, 600, 50);
	bobObject3 = new Bob(400, 600, 50);
	bobObject4 = new Bob(500, 600, 50);
	bobObject5 = new Bob(600, 600, 50);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Roof.display();
	Rope.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	
	drawSprites();
 
}



