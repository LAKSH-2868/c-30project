class Block {
    constructor(x,y,w,h){
        var option = {
            isStatic:false,
            'density':1,
            'friction':2,
            'restitution':0
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,option);
        this.visiblity = 255;
        World.add(world,this.body)
    }
     
    display(){
        var pos = this.body.position;
        if(this.body.speed < 3){
            super.display();           
        }
        push();
        World.remove(world,this.body);
        this.visiblity = this.visiblity - 10;
        tint(255,this.visiblity);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.w,this.h);
        pop();
    }
}