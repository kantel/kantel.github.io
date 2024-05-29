class Octopussy {
  constructor() {
    this.x = 30;
    this.y = 140;
    this.w = 120;
    this.h = 100;
    this.im = octoIm;

    this.gravity = 0.05;
    this.lift = -12;
    this.vel = 0;
  }

  up() {
    this.vel += this.lift;
  }

  update() {
    this.vel += this.gravity;
    this.vel *= 0.9;
    this.y += this.vel;
    // Check border
    if (this.y >= height - this.h) {
      this.y = height - this.h;
      this.vel = 0;
    } else if (this.y <= 0) {
      this.y = 0;
      this.vel = 0;
    }
  }

  display() {
    image(this.im, this.x, this.y, this.w, this.h);
  }
}
