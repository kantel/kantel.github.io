// Farbpaletten
codingtrain = [[240, 80, 37], [248, 158, 80], [248, 239, 34] , [240, 99, 164],
               [146, 82, 161], [129, 122, 198], [98, 199, 119], [49, 197, 244]]
class Particle {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.acc = createVector(0, 0.05);
        this.vel = createVector(random(-2.0, 2.0), random(-2.0, 0.0));
        this.c = random(codingtrain);
        this.lifespan = 255.0;
        this.d = random(5, 30);
         }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.lifespan -= random(0.5, 1.0);
    }

    display() {
        stroke(0, this.lifespan);
        let fillColor = color(this.c[0], this.c[1], this.c[2], this.lifespan);
        fill(fillColor);
        circle(this.pos.x, this.pos.y, this.d);
    }

    isNotAlive() {
        if (this.lifespan <= 0) {
            return(true);
        } else {
            return(false);
        }
    }
}

class RectParticle extends Particle {

    constructor(x, y) {
        super(x, y);
        rectMode(CENTER);
        this.rota = PI/3;
    }

    display() {
        stroke(0, this.lifespan);
        let fillColor = color(this.c[0], this.c[1], this.c[2], this.lifespan);
        fill(fillColor);
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.rota);
        rect(0, 0, this.d, this.d);
        pop();
        this.rota += random(0.02, .10);
    }
}