class Ball1 {
    constructor(x, y,r) {
        var options ={
          restitution  : true
        }
        this.x = x;
        this.y = y,
        this.r=r;
      this.body = Bodies.circle(x, y, r,options);
      World.add(world, this.body);
    }
  
      display() {
      var pos = this.body.position;
      push();
      rectMode(CENTER);
      stroke(255);
      fill("yellow");
      ellipse(pos.x, pos.y, this.r);
      pop();
    }
    
  }