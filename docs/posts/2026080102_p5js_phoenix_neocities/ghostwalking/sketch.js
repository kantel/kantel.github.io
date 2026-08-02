let x, x1, y;
let dia = 75;

function setup() {
  createCanvas(640, 400);
  // canvas.parent("myCanvas");
  x = -dia;
  x1 = 0;
  y = height/2;
 }
 
 function draw() {
   background(25, 25, 112);
   textSize(dia);
   text("👻", x, y);
   x += 1;
   x1 += 0.005;
   y = map(sin(x1), -1, 1, dia, height - dia/2);
  
   if (x >= width) {
    x = -dia;
   }
 }
