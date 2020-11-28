class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            density: 1.2,
            restitution: 0.3,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        World.add(world, this.body);
      }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        circle(0,0,this.r*2);
        pop();
    }
}