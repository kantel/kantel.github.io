let horngirl;

function preload() {
  horngirl = loadImage("data/horngirl.png");
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  horngirl = new Horngirl(width / 2, height / 2);
}

function draw() {
  background(92, 132, 168);
  horngirl.update();
  horngirl.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    horngirl.vel.set(0, -horngirl.speed);
  } else if (keyCode === DOWN_ARROW) {
    horngirl.vel.set(0, horngirl.speed);
  } else if (keyCode === LEFT_ARROW) {
    horngirl.vel.set(-horngirl.speed, 0);
  } else if (keyCode === RIGHT_ARROW) {
    horngirl.vel.set(horngirl.speed, 0);
  }
  return false;
}

function keyReleased() {
  horngirl.vel.set(0, 0);
}
