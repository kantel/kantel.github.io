class Bird {

    constructor() {
        this.r = random(10, 16);
        this.d = 2*this.r;
        let x = random(this.d, width - this.d);
        let y = random(this.d, height - this.d);
        this.pos = createVector(x, y);
        let dx = random(-3, 4);
        let dy = random(-2, 3);
        this.vel = createVector(dx, dy);
        this.img = random(birdsIm);
    }

    update() {
        this.pos.add(this.vel);
    }

    checkBoundaries() {
        if (this.pos.x >= width - this.r) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        } else if (this.pos.x < this.r) {
            this.pos.x = this.r;
            this.vel.x *= -1;
        }
        if (this.pos.y >= height - this.r) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        } else if (this.pos.y < this.r) {
            this.pos.y = this.r;
            this.vel.y *= -1;
        }
    }

    collisionDetection(other) {
        let impactVector = p5.Vector.sub(other.pos, this.pos);
        let d = impactVector.mag();
        if (d < this.r + other.r) {
            // Push the birds out so that they are not overlapping  
            let overlap = d - (this.r + other.r);
            let dist = impactVector.copy(); 
            dist.setMag(overlap*0.5);
            this.pos.add(dist);
            other.pos.sub(dist);
            // Swap the velocity of the colliding birds
            let tempX = other.vel.x;
            let tempY = other.vel.y;
            other.vel.x = this.vel.x;
            other.vel.y = this.vel.y;
            this.vel.x = tempX;
            this.vel.y = tempY;
         }
    }

    display() {
        image(this.img, this.pos.x, this.pos.y, this.d, this.d);
    }

}