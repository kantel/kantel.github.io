let numBirds = 25;
let birds = [];
let birdsIm = [];

let img;

async function setup() {

    // load the bird images
    img = await loadImage("assets/chick.png");
    birdsIm.push(img);
    img = await loadImage("assets/chicken.png");
    birdsIm.push(img);
    img = await loadImage("assets/duck.png");
    birdsIm.push(img);
    img = await loadImage("assets/owl.png");
    birdsIm.push(img);
    img = await loadImage("assets/parrot.png");
    birdsIm.push(img);
    img = await loadImage("assets/penguin.png");
    birdsIm.push(img);
    // console.log("Alle Bilder geladen.");

    // createCanvas(640, 400);
    canvas = createCanvas(640, 400);   // für das Einbinden
    canvas.parent("myCanvas");         // in diese Webseite
    imageMode(CENTER);
    reset();
}

function draw() {
    background(234, 218, 184);
    for (let i = 0; i < numBirds; i++) {
        for (let j = i + 1; j < numBirds; j++) {
            birds[i].collisionDetection(birds[j]); 
        }
        birds[i].checkBoundaries();
        birds[i].update();
        birds[i].display();
    }
}

function reset() {
  for (let bird = 0; bird < numBirds; bird++) {
    b = new Bird();
    birds.push(b);
  }
}

function mousePressed() {
  birds.length = 0;   // Array leeren
  reset();
}