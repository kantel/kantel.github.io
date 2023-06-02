// Retro Platformer Stage 4
// Mit P5.play und planck.js
// Assets: Pixel Adventure von Pixel Frog: https://pixelfrog-assets.itch.io/pixel-adventure-1

// Konstanten
const winwidth = 640;
const winheight = 240;
const ninjaSpeed = 1.0;

// Globale Variablen
let ninja;
let ninjaIdleAni;
let ninjaWalkAni;
let ground;
let groundImage;
let platform1, platform2;
let platformImage;

// Funktionen
function displayGround() {
  push();
  noStroke();
  fill(150, 63, 62);  // Rotbraun
  rect(0, height - 50, width, height);
  pop();
}

// Hauptprogramm
function preload() {
  ninjaIdleAni = loadAni("data/ninjafrog/idle/ninjafrog_idle_00.png", 10);
  ninjaWalkAni = loadAni("data/ninjafrog/walk/ninjafrog_walk_00.png", 11);
  groundImage   = loadImage("data/ground.png");
  platformImage = loadImage("data/platform01.png");
}

function setup() {
  myCanvas = createCanvas(winwidth, winheight);
  myCanvas.parent("mysketch");
  // Welt-Eigenschaften
  world.gravity.y = 50;
  ground = new Sprite(width/2, height - 30, width, 48, "static");
  ground.img = groundImage;
  platform1 = new Sprite(160, 128, 80, 32, "static");
  platform1.img = platformImage;
  platform2 = new Sprite(560, 160, 80, 32, "static");
  platform2.img = platformImage;
  // Ninja-Eigenschaften
  ninja = new Sprite(148, 16);
  ninja.addAni("walk", ninjaWalkAni);
  ninja.addAni("idle", ninjaIdleAni);
  ninja.mirror.x = false;
  ninja.speed = 0;
  } // end setup()

function draw() {
  background(215, 189, 156);  // Ocker 
  // displayGround();

  if (kb.pressing("left")) {
    ninja.mirror.x = true;
    ninja.ani = "walk";
    if (ninja.x > 16) {
      ninja.direction = 180;
      ninja.speed = ninjaSpeed;
    } else {
      ninja.speed = 0;
    }
  } else if (kb.pressing("right")) {
    ninja.mirror.x = false;
    ninja.ani = "walk";
    if (ninja.x < width - 16) {
      ninja.direction = 0;
      ninja.speed = ninjaSpeed;
    } else {
    ninja.speed = 0;
    }
  } else if (kb.presses("space")) {
    ninja.vel.y = 400;                                   
  } else {
    ninja.ani = "idle";
    ninja.rotation = 0;
    ninja.speed = 0;
  }
} // end draw()

// End Hauptprogramm

