class Beetle {
  constructor() {
    this.w = 100;
    this.h = 110;
    this.im = beetleIm;
    this.reset();
  }

  reset() {
    this.x = random(width + 100, width + 400);
    this.y = random(150, height - 150);
    this.speed = random(0.5, 2);
  }

  update() {
    this.x -= this.speed;
    if (this.x <= -150) {
      this.reset();
    }
  }

  display() {
    image(this.im, this.x, this.y, this.w, this.h);
  }
}
