let numBalls = 25;
let balls = [];

function setup() {
  canvas = createCanvas(640, 400);
  canvas.parent("myCanvas");
  reset();
}

function draw() {
  background(234, 218, 184);
  for (let ball of balls) {
    ball.display();
    ball.update();
    ball.checkBoundaries();
  }
}

function reset() {
  for (let ball = 0; ball < numBalls; ball++) {
    b = new Ball();
    balls.push(b);
  }
}

function mousePressed() {
  balls.length = 0;   // Array leeren
  reset();
}