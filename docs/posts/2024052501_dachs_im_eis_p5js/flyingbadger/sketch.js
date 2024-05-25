const windowWidth = 720;
const windowHeight = 400;
const bgWidth = 2024;
let bg1, bg2;
let backs = [];
let badim;
let badger;

function preload() {
  bg1 = loadImage("data/bgim1.png");
  bg2 = loadImage("data/bgim2.png");
  badim = loadImage("data/badgerim.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backs[0] = new Background(0, 0, bg1);
  backs[1] = new Background(bgWidth, 0, bg2);
  badger = new Badger();
}

function draw() {
  for (let back of backs) {
    back.update();
    back.display()
  }
  badger.display();
}