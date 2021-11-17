class Brick extends Paddle {
  constructor(x, y, w, h,) {
    super(x, y ,w, h);
  }
  
  //render pa los ladrillitos, estos son mas simples que el resto(no me quiten po...plis)
  render() {
    push();
    strokeWeight(1);
    stroke(0);
    fill(93,193,185);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.width-2, this.height-2);
    pop();   
  }
}