class box {
    constructor(x, y, w, h) {
        var box_options={
   
            restitution: 0.5

        
          }
        
          this.body= Bodies.rectangle(x,y,w,h,box_options);
          World.add(myworld,this.body);

this.w= w;
this.h= h;

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}