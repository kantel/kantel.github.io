// Dancing Crab v2
// Jörg Kantel 2023
// Inspiriert von Heiko Fehr: »Let's Code Python«, Bonn (Rheinwerk-Verlag) 2019, Seiten 247ff.
// Krabbe: Nitin Chowdary (CC0), https://opengameart.org/content/crab
// Luftblasen: HorrorPen (CC-BY 3.0), https://opengameart.org/content/bubbles8-colors
// Bildhintergrund: Kenney.nl Fish Pack (CC0), https://www.kenney.nl/assets/fish-pack
// Font: Fredericka the Great (OFL), https://fonts.google.com/specimen/Fredericka+the+Great

const windowWidth = 640;
const windowHeight = 416;
const fps = 60;
const numBubbles = 50;
const numEnemies = 5;

let bg;
let displayFont;
let crab;
let crabImages = [];
let bubbles = [];
let bubbleImages = [];
let enemyBubbles = [];
let enemyImage;

class Crab {

  constructor() {
    this.w = 64;
    this.h = 64;
    this.r = 32;
    this.x = width/2 - this.w/2;
    this.y = height/2 + 100;
    this.img = crabImages[0];
    this.dir = "none";
    this.speed = 5;
    this.animationCount = 0;
    this.score = 0;
    this.death = 0;
  }

  update() {
    // Bewegung
    if (this.dir == "none") {
      this.x += 0;
    } else if (this.dir == "right") {
      if (this.x <= width - this.w - 5) {
        this.x += this.speed;
      }
    } else if (this.dir == "left") {
      if (this.x >= 2) {
        this.x -= this.speed;
      }
    }
    // Animation
    this.animationCount += 1;
    if (this.dir == "none") {
      this.img = crabImages[0];
    } else {
    if (this.animationCount >= 10) {
      this.animationCount = 0;
    }
    if (this.animationCount <= 5) {
      this.img = crabImages[0];
    } else {
      this.img = crabImages[1];
    }
  }
  }

  display() {
    image(this.img, this.x, this.y);
  }
}

class Bubble {

  constructor() {
    this.reset();
    this.speed = 2;
  }

  reset() {
    let dia = int(random(0, 2))
    this.img = bubbleImages[dia];
    this.r = this.img.width/2;
    this.x = int(random(width));
    this.y = int(random(-2*height, -50));
  }

  isCircleCollision(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance < this.r + other.r) {
      return true;
    }
    return false;
  }

  update() {
    this.y += this.speed;
    if (this.y > height + 50) {
      this.reset();
    }
  }

  display() {
    image(this.img, this.x, this.y);
  }
}

class EnemyBubble extends Bubble {

  constructor() {
    super();
    this.reset();
    this.r = 15;
    this.speed = 3;
    this.img = enemyImage;
  }

    reset() {
      this.x = int(random(width));
      this.y = int(random(-2*height, -50));
    }
  }

function preload() {
  bg = loadImage("data/background.png");
  crabImages[0] = loadImage("data/crab1.png");
  crabImages[1] = loadImage("data/crab2.png");
  for (let i = 0; i < 3; i++) {
    bubbleImages[i] = loadImage("data/bubbleblue" + str(i) + ".png"); 
  }
  enemyImage = loadImage("data/bubblere1.png");
  displayFont = loadFont("data/FrederickatheGreat-Regular.ttf")
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("crab01");
  frameRate(fps);
  textFont(displayFont);
  for (let i = 0; i < numBubbles; i++) {
    bubbles[i] = new Bubble;
  }
  for (let j = 0; j < numEnemies; j++) {
    enemyBubbles[j] = new EnemyBubble;
  }
  crab = new Crab();
}

function draw() {
  background(49, 197, 244);    // Hellblau
  image(bg, 0, 0);
  for (let bubble of bubbles) {
    bubble.update();
    if (bubble.isCircleCollision(crab)) {
      bubble.reset();
      crab.score += 1;
      // console.log(crab.score);
    }
    bubble.display();
  }
  for (enemyBubble of enemyBubbles) {
    enemyBubble.update();
    if (enemyBubble.isCircleCollision(crab)) {
      console.log("GAME OVER");
      enemyBubble.reset();
      crab.death += 1;
      // crab.x = 2000;
      // crab.y = 2000;
    }
    enemyBubble.display();
  }
  crab.update();
  crab.display();
  displayHUD();
}

function displayHUD() {
  let hud1 = ("Score: " + crab.score);
  let hud2 = ("Death: " + crab.death);
  push();
  stroke(0);
  strokeWeight(1);
  fill(200, 10, 10);
  textSize(36);
  text(hud1, 20, 40);
  text(hud2, 200, 40);
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    crab.dir = "left";
  } else if (keyCode === RIGHT_ARROW) {
    crab.dir = "right";
  }
  return false;
}

function keyReleased() {
  crab.dir = "none";
  return false;
}