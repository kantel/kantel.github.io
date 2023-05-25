// Retro Platformer Stage 2
// Mit P5.play und planck.js
// Nach Mr. Erdreich: Creating a Retro-Style Platform Game in P5.js <https://www.youtube.com/playlist?list=PLBDInqUM5B26FjwMMZqGDxqQr1kX5V9Ul>, ca. 2020
// Klassen und nach ES 6 angepaßt: Jörg Kantel, 2023

// Konstanten
const winwidth = 480;
const winheight = 224;

// Globale Variablen
let stage;
let player;
const platforms = [];

// Klassen

// Spieler
class Player {

  constructor() {
    this.x = 240;
    this.y = 146;
    this.w = 16;
    this.h = 32;
    this.speed = 5;
  } // End Player constructor()

  update() {

  } // End Player update()

  display() {
    push();
    stroke(0);
    strokeWeight(2);
    fill(150, 0, 150);  // purple
    rect(this.x, this.y, this.w, this.h);
    pop();
  }  // End Player display()

} // End Player

// Platform
class Platform {

  constructor(_x, _y, _w, _h) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
  } // End Platform constructor()

  display() {
    push();
    stroke(0);
    strokeWeight(2);
    fill(250, 120, 10);  // Orange
    rect(this.x, this.y, this.w, this.h);
    pop();
  } // End Platform display()

} // End Platform
// End Klassen

// Funktionen
function game() {
  background(150, 230, 240);  // Himmelblau
  // Grund
  push();
  noStroke();
  fill(100, 200, 75);  // Grasgrün
  rect(width/2, height + 50, width, height);
  pop();
  // Fensterrahmen
  push();
  noFill();
  stroke(0)   // Schwarz
  strokeWeight(7);
  rect(width/2, height/2, width, height);
  pop();
  // Platforms
  for (let platform of platforms) {
    platform.display();
  }
  // Player
  if (kb.pressing("left")) {
    if (player.x > player.w) {
      player.x -= player.speed;
    }
  } else if (kb.pressing("right")) {
    if (player.x < width - player.w) {
      player.x += player.speed;
    }
  } else {
    player.x += 0;
  }
  player.display();
} // end game()
// End Funktionen

// Hauptprogramm
function setup() {
  myCanvas = createCanvas(winwidth, winheight);
  myCanvas.parent("retro2");
  stage = 0;
  rectMode(CENTER);
  textAlign(CENTER);
  platforms[0] = new Platform(128, 112, 128, 16);
  player = new Player;
} // end setup()

function draw() {
  if (stage == 0) {
    game();
  }
} // end draw()

// End Hauptprogramm

