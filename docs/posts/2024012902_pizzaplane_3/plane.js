// Class Plane
class Plane {

    constructor() {
      this.x = 75;
      this.y = 240;
      this.img = planImages[0];
      this.w = this.img.width;
      this.h = this.img.height;
      this.frame = 0;
      this.speed = 5
      this.dir = "NONE";
      this.anim  = 0;
      this.firecount = 0;
      this.score = 0;
      this.lives = 5; 
    }
  
    update() {
      if (this.dir === "NONE") {
        this.y += 0;
      }
      else if (this.dir === "UP") {
        if (this.y > 40) {
          this.y -= this.speed;
        }
      }
      else if (this.dir === "DOWN") {
        if (this.y < height - 100) {
          this.y += this.speed;
        }
      }
    this.anim += 1;
    if (this.anim >= maxAnim) {
      this.anim = 0;
      this.frame += 1;
      if (this.frame >= 2) {
        this.frame = 0;
      }
      this.firecount -= 1;
      this.img = planImages[this.frame];
    }
  }

  fire() {
    if (this.firecount < 0) {
        let missile = new Missile(this.x + this.w, this.y + this.h/2);
        missiles.push(missile);
        this.firecount = 2;
    }
  }

  display() {
    image(this.img, this.x, this.y);
  }
}
