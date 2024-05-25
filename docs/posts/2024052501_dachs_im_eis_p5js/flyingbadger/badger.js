class Badger {
  constructor() {
    this.x = 100;
    this.y = 140;
    this.w = 70;
    this.h = 125;
    this.im = badim;
  }
  
  display() {
    image(this.im, this.x, this.y, this.w, this.h);
  }
}