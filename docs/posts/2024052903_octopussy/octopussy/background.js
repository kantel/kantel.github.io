class Background {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.im = bg;
    this.speed = 0.5;
  }

  update() {
    this.x -= this.speed;
    if (this.x <= -bgWidth) {
      this.x = bgWidth;
    }
  }

  display() {
    image(this.im, this.x, this.y);
  }
}
