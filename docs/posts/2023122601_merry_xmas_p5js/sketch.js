// Santa, nach einer Idee von Potato Imaginator
// (https://editor.p5js.org/PotatoImaginator/sketches/wIhXRmmK4)
// Hintergrundbild mit DreamStudio erstellt

const canvasWidth = 840;    // 940
const canvasHeight = 400;   // 315
let w = canvasWidth;
let h0 = 150;               // Schlittenhöhe
let f1 = 60;                // Frequenz
let h1 = 35;                // Schwinung
let snowflakes = [];        // Schnee-Array
let n = 30;                 // Anzahl Schneeflocken
let bg;

function preload() {
  bg = loadImage("images/wintervalley01.jpg");
}

function setup() {
  myCanvas = createCanvas(canvasWidth, canvasHeight);
  myCanvas.parent("santa");
  // Schnee
  for (let i = 1; i < n; i++) {
    snowflakes[i] = {x: random(0, width), y: random(0, height),
                     dy: 1/random(1, 3), size: random(1, 2)};
  }
  print(height);
}

function draw() {
  background(bg);
  updateSnow();
  drawSnow();
  santa(w);
  w -= 3;
  if (w < -400) {
    w = width;
  }
}

function santa(x) {
  textSize(65);
  // Hirsche
  for (i = 0; i < 3; i++) {
    text('🦌', x + 90*i, h0 + h1*sin((x + 100*i)/f1));
  }
  text('🛷', x + 300, h0 + h1*sin((x + 340)/f1));
  textSize(37);
  text('🎅', x + 325, (h0 - 30) + h1*sin((x + 340)/f1));
}

function updateSnow() {
  for (let i = 1; i < n; i++) {
    snowflakes[i].y += 3*snowflakes[i].dy;
    if (snowflakes[i].y > height + 20) {
      snowflakes[i] = {x: random(0, width), y: random(-50, -100),
                       dy: 1/random(1, 3), size: random(1, 2)};
    }
  }
}

function drawSnow() {
  blendMode(DODGE);
  for (let i = 1; i < n; i++) {
    textSize(30/snowflakes[i].size);
    text('❄️',snowflakes[i].x+8*sin(snowflakes[i].y/30),snowflakes[i].y);
    blendMode(BLEND);
  }
}