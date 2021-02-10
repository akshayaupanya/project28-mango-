class Stone{
    constructor(x,y){
        var option = {
        isStatic : false,
        restitution: 0.2,
        friction: 1,
        density: 1.5
        }
        this.body = Bodies.circle(x,y,10,option)
        this.radius = 10;
        World.add(world,this.body)
        
        
        this.img = loadImage("images/stone.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.img,0,0,this.radius*2,this.radius*2);
        pop();
    }
}