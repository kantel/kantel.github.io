let bg;
let orc1, orc2, orc3;
let my_orc = [];
let max_orc = 20;

async function setup() {
  canvas = createCanvas(640, 320);
  canvas.parent("myCanvas");
  bg = await loadImage("assets/field.png");
  orc1 = await loadImage("assets/orc1.png");
  orc2 = await loadImage("assets/orc2.png");
  orc3 = await loadImage("assets/orc3.png");
  for (let i = 0; i < max_orc; i++) {
   my_orc[i] = new Orc(random(32, width - 32), -i*48);
  }
  frameRate(18);
 }
 
 function draw() {
   background("green");
   image(bg, 0, 0);
   for (let i = 0; i < max_orc; i++) {
    my_orc[i].update();
    my_orc[i].display();
   }
  }

