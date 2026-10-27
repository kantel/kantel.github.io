let colors = ["#e66037cc", "#112a6acc",
              "#b77440cc", "#d4fb45cc",
              "#fc4bc8cc", "#9f35e9cc",
              "#39da38cc", "#ef2200cc",
              "#4e942acc", "#43fed3cc",
              "#4a8fbacc", "#3463eacc"];
class Ball {

  constructor() {
    this.r = random(8, 20);
    this.d = 2*this.r;
    let x = random(this.d, width - this.d);
    let y = random(this.d, height - this.d);
    this.pos = createVector(x, y);
    let dx = random(-3, 4);
    let dy = random(-2, 3);
    this.vel = createVector(dx, dy)
    this.col = random(colors);
  }

  update() {
     this.pos.add(this.vel);
  }

  checkBoundaries() {
    if (this.pos.x >= width - this.r|| this.pos.x < this.r) {
      this.vel.x *= -1;
    }
    if (this.pos.y >= height - this.r || this.pos.y < this.r) {
      this.vel.y *= -1;
    }
  }
  display() {
    fill(this.col);
    strokeWeight(2);
    circle(this.pos.x, this.pos.y, this.d);
  }
  
}
