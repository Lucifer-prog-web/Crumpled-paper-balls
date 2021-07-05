const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj;
var t1, t2;
function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= new Ball1 (200,610,20);
	Matter.Bodies.circle(300,400,30,[ball],[1])
	t1=new Ground(600,610,10,100);
    t2=new Ground(700,610,10,100)
	Engine.run(engine);
  
}


function draw() {
  background(0);

  groundObj = new Ground(width/2,670,width,20);
  leftSide = new Ground	(1100,600,20,120);

  groundObj.display();
  t1.display();
  t2.display();
  ball.display();
  
  keyPressed();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:5})
	}
}