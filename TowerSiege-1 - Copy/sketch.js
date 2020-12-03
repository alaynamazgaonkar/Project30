const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];
var box,base,boxx,polygon,sling;

function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;

  box1= new Box(300,465,40,50)
  box2= new Box(400,465,40,50)
  box3= new Box(450,465,40,50)
  box4= new Box(350,465,40,50)
  box5= new Box(500,465,40,50)
  box6= new Box(320,415,40,50)
  box7= new Box(375,415,40,50)
  box8= new Box(425,415,40,50)
  box9= new Box(480,415,40,50)
  box10= new Box(350,365,40,50)
  box11= new Box(450,365,40,50)
  box12= new Box(400,365,40,50)
  box13= new Box(430,315,40,50)
  box14= new Box(370,315,40,50)
  box15= new Box(400,265,40,50)
  box16= new Box(500,215,40,50)
  
 base1 = new Base(400,500,300,20)
 base2 = new Base(650,300,200,20)

  boxx1= new Box(590,265,40,50)
  boxx2= new Box(640,265,40,50)
  boxx3= new Box(690,265,40,50)
  boxx4= new Box(610,215,40,50)
  boxx5= new Box(670,215,40,50)
  boxx6= new Box(640,165,40,50)
  
  polygon = new Polygon(100,400,50,50)
  sling = new SlingShot(polygon.body,{x:100,y:400})
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
 // circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("gray");  
  Engine.update(engine);
  //console.log(box1.speed)
 // a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
//for (i=0;i<circles.length;i++){
//circle(circles[i], height/2,20)}
//if(camera.position.x%width===0){
//circles.push(camera.position.x+width/2)}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 
 if(keyCode===32){
  keyPressed() 
 }



 //drawSprites();
 base1.display()
 box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
base2.display()
boxx1.display()
boxx2.display()
boxx3.display()
boxx4.display()
boxx5.display()
boxx6.display()
polygon.display()
sling.display()
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
     // camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged(){
  
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY} );
 // }
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
      
  sling.attach(polygon.body);
  //Matter.Body.setPosition(this.polygon,{x:100,y:400})

}
