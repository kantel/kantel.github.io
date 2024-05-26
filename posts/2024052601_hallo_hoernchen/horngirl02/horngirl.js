class Horngirl {
  constructor(_x, _y) {
    this.pos = createVector(_x, _y);
    this.vel = createVector(0, 0);
    this.speed = 2;
    this.w = 100;
    this.h = 100;
    this.im = horngirl;
  }

  update() {
    this.pos.add(this.vel);
    // Check borders
    if (this.pos.x < this.w / 2) {
      this.pos.x = this.w / 2;
      this.vel.set(0, 0);
    }
    if (this.pos.x > width - this.w / 2) {
      this.pos.x = width - this.w / 2;
      this.vel.set(0, 0);
    }
    if (this.pos.y < this.h / 2) {
      this.pos.y = this.h / 2;
      this.vel.set(0, 0);
    }
    if (this.pos.y > height - this.h / 2) {
      this.pos.y = height - this.h / 2;
      this.vel.set(0, 0);
    }
  }

  display() {
    image(this.im, this.pos.x, this.pos.y, this.w, this.h);
  }
}
