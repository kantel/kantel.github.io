let bg;
let alice;
let balloonImages = [];
let balloons = [];
const numBalloons = 20;

function preload() {
  for (let i = 0; i < 8; i++) {
    let balloonName = "data/balloon" + i + ".png";
    balloonImages[i] = loadImage(balloonName);
  }
  bg = loadImage("data/landscape.png");
  alice = loadImage("data/alice.png");
}

function setup() {
  createCanvas(800, 450);
  for (let i = 0; i < numBalloons; i++) {
    balloons.push(new Balloon());
  }
}

function draw() {
  image(bg, 0, 0);
  for (let balloon of balloons) {
    balloon.move();
    balloon.show();
  }

  image(alice, 30, 70);
}
