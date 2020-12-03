class Box 
//extends Baseclass 
{
    constructor(x, y, width, height){
      //super(x,y,width,height);
      //this.image = loadImage("sprites/wood1.png");
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.01,
        'isStatic':false
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    //this.speed=speed;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
      // super.display();
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        rect( 0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      
    }
  };
  