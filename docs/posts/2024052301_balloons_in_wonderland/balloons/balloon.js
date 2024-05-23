class Balloon {
  constructor() {
    this.reset();
  }

  reset() {
    this.w = random(60, 120);
    let x = random(width - this.w);
    let y = random(height + 100, height + 400);
    this.loc = createVector(x, y);
    let velx = random(-0.5, 0.5);
    let vely = random(-4, -1);
    this.vel = createVector(velx, vely);
    this.im = random(balloonImages);
  }
  
  move() {
    this.loc.add(this.vel);
    if (this.loc.y < -2 * this.w) {
      this.reset();
    }
  }
  
  show() {
    image(this.im, this.loc.x, this.loc.y, this.w, this.w);
  }
}
