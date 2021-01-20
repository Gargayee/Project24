class Paper{
    constructor(x,y,r){
        var options={
            isStatic : false,
            friction : 0.5,
            density : 1.2,
            restituion : 0.3
        }
     this.body=Bodies.circle(this.x,this.y,20,options);
     this.radius=r;
     this.x=x;
     this.y=y;

     World.add(world,this.body);
    }

    display(){
       var pos=this.body.position;
       push();
       translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("purple");
        ellipseMode(0,0,this.r);
        pop();
        }
};