const WIDTH = 840;
const HEIGHT = 400;
let startX;
let startY;
let bgImage;
let p;
let particles = [];


function preload() {
  bgImage = loadImage("data/bgsmallvillage.jpg");
}

function setup() {
  myCanvas = createCanvas(WIDTH, HEIGHT);
  myCanvas.parent("sketch");
  startX = width/2;
  startY = 70;
}

function draw() {
  background(bgImage);
  let change = random(10);
  if (change <= 5) {
    p = new Particle(startX, startY);
  } else {
    p = new RectParticle(startX, startY);
  }
  particles.push(p)
   for (let i = 0; i < particles.length; i++) {
    // print(particles[i].loc.x)
    particles[i].update();
    particles[i].display();
    if (particles[i].isNotAlive()) {
      particles.splice(i, 1);
     }
  }
}
