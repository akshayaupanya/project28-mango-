class Chain{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB
        }
        this.body = Constraint.create(option);
        World.add(world,this.body);
        this.pointB = pointB;
        this.bodyA = bodyA;

    }
    fly(){
        this.body.bodyA = null;
    }
    display(){
        if(this.body.bodyA){
        var pos = this.body.bodyA.position;
       // var pointB = this.body.pointB;
      // strokeWeight(5);
       stroke('black');
       line(this.pointB.x,this.pointB.y,pos.x,pos.y); 
        }
    }
}