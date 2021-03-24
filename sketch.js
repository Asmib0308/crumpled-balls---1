const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1, dustbin, ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    dustbin1 = new Dustbin(1000,380,200,30);
    dustbin2 = new Dustbin(900,330,20,120);
    dustbin3 = new Dustbin(1100,330,20,120);

    paper1 = new Paper(100,300,15);

    ground = new Ground(600,389,1198,20);

    keyPressed();
}

function draw(){
    background("black");
    Engine.update(engine);

    stroke("white")
    fill("pink")
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();

    fill("yellow")
    paper1.display();

    fill("magenta")
    ground.display();

}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 73,y: -73})
    }
  }
