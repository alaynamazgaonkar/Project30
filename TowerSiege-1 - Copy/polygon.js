class Polygon 
//extends BaseClass 
{
    constructor(x, y, width, height){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.3,
        'isStatic':false
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("sprites/base.png");
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
     // super(x,y,width,height);
      
    }
       display(){
       //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
     // fill("red")
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }



  };