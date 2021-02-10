
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2= new mango(1000,100,30);
	mango3= new mango(1000,170,30);
	mango4= new mango(900,170,30);
	mango5= new mango(910,200,30);
	mango6= new mango(1070,100,30);
	mango7= new mango(950,190,30);
	mango8= new mango(940,270,30);
	mango9= new mango(1150,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Stone(230,450);
	chain = new Chain(stone.body,{x:240,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
console.log(stone.body.position);
  treeObj.display();
  mango1.display();
stone.display();
  groundObject.display();
  chain.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  
  
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	chain.fly();
}
