const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var bunny;
var rope, rope2;
var bunny_Animation, bubble_Animation;
var bubble;
var bg;
var button, button2;
var fruit, fruitImg;
var fruit_con, fruit_con_2;
var base;

function preload(){
bunny_Animation= loadAnimation("blink_1.png");
bubble_Animation= loadAnimation("bubble.png");
fruitImg= loadImage("melon.png");
bg= loadImage("background.png");

}


function setup() {
  createCanvas(800,700);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world  = engine.world;

  rope = new Rope(6,{x:410,y:410});
  rope2 = new Rope(4,{x:165,y:500});
 
  button = createImg('cut_btn.png');
  button.position(380,410);
  button.size(50,50);
  //button.mouseClicked(drop);

  button2 = createImg('cut_btn.png');
  button2.position(150,500);
  button2.size(50,50);
  //button2.mouseClicked(drop2);
  
  bunny= createSprite(470,120,50,50);
  bunny.addAnimation("bunny", bunny_Animation);
  bunny.scale= 0.3;

  bubble= createSprite(500, 380, 30,30);
  bubble.addAnimation("bubble", bubble_Animation);
  bubble.scale= 0.1;

  fruit= createSprite(330, 530, 20,20);
  fruit.addImage(fruitImg);
  fruit.scale= 0.09;

  //base= new Ground(490, 130,40,90);
  base= Bodies.rectangle(490,130,40,90);


  //fruit_con = new Link(rope,fruit);
  //fruit_con_2 = new Link(rope2,fruit);

}

function draw() {

  background(bg);  

  rope.show();
  rope2.show();
//  base.show();
  Engine.update(engine);
  drawSprites();
}

// function drop()
// {
//   rope.break();
//   fruit_con.detach();
//   fruit_con = null; 
// }

// function drop2()
// {
//   cut_sound.play();
//   rope2.break();
//   fruit_con_2.detach();

//   fruit_con_2 = null;
// }