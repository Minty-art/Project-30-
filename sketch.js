const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var polygon

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

    polyg = new poly(300,600,45,45)
    ground = new Ground(600,550,400,20);
    box1 = new box (635, 540, 50,50)
    box2 = new box (655, 540, 50,50)
    box3 = new box (640, 540, 50,50)
    box4 = new box (655, 450, 50,50)
    box5 = new box (660, 440, 50,50)
    box6 = new box (658, 400, 50,50)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(polyg.body,{x:200, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    polyg.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    ground.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polyg.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polyg.body);
    }
}