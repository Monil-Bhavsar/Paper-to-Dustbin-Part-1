class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic: true,
            density: 1.2,
            restitution: 0.3,
            friction: 0.5,
        }
        this.body1 = Bodies.rectangle(x-60,y-40,20,100,options);
        this.body2 = Bodies.rectangle(x,y,100,20,options);
        this.body3 = Bodies.rectangle(x+60,y-40,20,100,options);
        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
      }
    display(){
        var pos = this.body1.position;
        var angle = this.body1.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,20,100);
        pop();

        var pos = this.body2.position;
        var angle = this.body2.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,100,20);
        pop();

        var pos = this.body3.position;
        var angle = this.body3.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0,0,20,100);
        pop();
    }
}