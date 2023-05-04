// Robot 2

const WIDTH = 920;
const HEIGHT = 480;
let robot;

class Robot {

  constructor() {
    this.x = 60;
    this.y = 440;
    this.bodyHeight = 160;  // Body Height
    this.neckHeight = 70;  // Neck Height
    this.radius = 45;
    this.easing = 0.04;
    this.ny = this.y - this.bodyHeight - this.neckHeight - this.radius;  // Neck Y
  }
  
  display() {
    // Neck
    stroke(240, 120, 30);
    line(this.x + 2, this.y - this.bodyHeight, this.x + 2, this.ny);
    line(this.x + 12, this.y - this.bodyHeight, this.x + 12, this.ny);
    line(this.x + 22, this.y - this.bodyHeight, this.x + 22, this.ny);

    // Antennae
    stroke(240, 120, 30);
    line(this.x + 12, this.ny, this.x - 18, this.ny - 43);
    line(this.x + 12, this.ny, this.x + 42, this.ny - 99);
    line(this.x + 12, this.ny, this.x + 78, this.ny + 15);

    // Body
    noStroke();
    fill(240, 120, 30);
    circle(this.x, this.y - 33, 33, 33);
    fill(30, 30, 30);
    rect(this.x - 45, this.y - this.bodyHeight, 90, this.bodyHeight - 33);
    fill(240, 120, 30);
    rect(this.x - 45, this.y - this.bodyHeight + 17, 90, 6);

    // Head
    fill(30, 30, 30);
    circle(this.x + 12, this.ny, this.radius)
    fill(200, 200, 200);
    circle(this.x + 24, this.ny - 6, 14);
    fill(30, 30, 30);
    circle(this.x + 24, this.ny - 6, 3);
    fill(240, 120, 30);
    circle(this.x, this.ny - 8, 5);
    circle(this.x + 30, this.ny - 26, 4);
    circle(this.x + 41, this.ny + 6, 3);
  }

  update() {
    let targetX = mouseX;
    this.x += (targetX - this.x)*this.easing;
    if (this.x >= width - 80) {
      this.x = width - 80;
    } else if (this.x <= 60) {
      this.x = 60;
    }
    if (mouseIsPressed) {
      this.neckHeight = 16;
      this.bodyHeight = 90;
    } else {
      this.neckHeight = 70;
      this.bodyHeight = 160;
    }
    this.ny = this.y - this.bodyHeight - this.neckHeight - this.radius;  // Neck Y
  }
}

function setup() {
  let myCanvas = createCanvas(WIDTH, HEIGHT);
  myCanvas.parent("robby")
  strokeWeight(2);
  ellipseMode(RADIUS);
  robot = new Robot;
}

function draw() {
  background(20, 120, 200);
  robot.update();
  robot.display();
}
