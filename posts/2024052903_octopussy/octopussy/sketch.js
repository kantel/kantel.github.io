const windowWidth = 640;
const windowHeight = 400;
const bgWidth = 2048;
let octopussy;
let octoIm;
let beetle;
let beetleIm;
let bg;
let backs = [];

function preload() {
  octoIm = loadImage("data/octopus.png");
  beetleIm = loadImage("data/beetleship.png");
  bg = loadImage("data/background.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backs[0] = new Background(0, 0);
  backs[1] = new Background(bgWidth, 0);
  octopussy = new Octopussy();
  beetle = new Beetle();
}

function draw() {
  background(220);
  for (let back of backs) {
    back.update();
    back.display();
    beetle.update();
    octopussy.update();
    beetle.display();
    octopussy.display();
    // Screenshot
    // if (frameCount >= 250) {noLoop()}
  }
}

function mousePressed() {
  octopussy.up();
}
