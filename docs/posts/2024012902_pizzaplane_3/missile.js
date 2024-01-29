// Class Missile
class Missile {

    constructor(_x, _y) {
      this.x = _x;
      this.y = _y;
      this.img = missileImg;
      this.w = this.img.width;
      this.h = this.img.height;
      this.speed = 10;
    }
  
    update() {
      this.x += this.speed;
      if (this.x >= width + 20) {
        missiles.splice(-1);
      }
      for (let pizza of pizzas) {
        if (isRectCollision(this, pizza)) {
            pizza.reset();
            missiles.shift();
            let hit = new Explosion(this.x, this.y - 20);
            hits.push(hit);
            plane.score += 10;
        }
      }
    }

    display() {
        image(this.img, this.x, this.y);
    }
  }
  
  // Class Explosion
  class Explosion {

    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.img = explosionImg;
        this.timer = 5;
    }

    update() {
        this.timer -= 1;
        if (this.timer <= 0) {
            hits.splice(-1);
        }
    }

    display() {
        image(this.img, this.x, this.y);
    }
  }