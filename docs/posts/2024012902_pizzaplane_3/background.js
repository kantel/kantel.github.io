class Background {

    constructor(_x, _y, _im) {
      this.x = _x;
      this.y = _y;
      this.startx = _x;
      this.img = _im;
    }
  
    update() {
      this.x -= 1;
      if (this.x <= -bgWidth) {
        this.x = bgWidth;
      }
  
    }
  
    display() {
      image(this.img, this.x, this.y);
    }
  
  }