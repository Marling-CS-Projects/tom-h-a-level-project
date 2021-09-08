import * as p5 from "p5";
import { Bodies, Body, Engine, Vector } from 'matter-js';
import GameObject from "./GameObject";
import * as Matter from "matter-js";

class Player extends GameObject {
  canJump: boolean;

  constructor(
    engine: Engine,
    pos: p5.Vector,
    width: number,
    height: number) {

    // The inertia prevents rotation
    super(engine, Bodies.rectangle(pos.x, pos.y, width, height, { inertia: Infinity, friction: 0.0 }))

    this.canJump;    
  }

  

  update(p: p5) {

    // Handle the controls
    
    let jumpTime = 0;
    let jumpTimer = 300;
    let playerCanJump = false




    
   
    
    if (p.keyIsDown(87) && this.canJump == true ) {
      let now = Date.now();
      if ((now - jumpTime) > jumpTimer) {
        Body.applyForce(this.body, Vector.create(0, 0), Vector.create(0, -0.01));
          jumpTime = now;
      }
    }
    if (p.keyIsDown(68)) {
      this.body.position.x += 1;
    }
    if (p.keyIsDown(65)) {
      this.body.position.x -= 1;
    }
  
  
  }

  draw(p: p5) {
    p.stroke(0);
    p.strokeWeight(5);
    p.fill(150, 0, 70);

    this.drawBody(p);
  }

  
  
}

export default Player