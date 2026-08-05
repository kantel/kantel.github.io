class Orc {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.dy = random(1, 3);
        this.w = 32;   // width
        this.h = 48;   // height
        this.img = orc2;
    }
    
    update() {
        this.y += this.dy;
        if (this.y >= height + this.h) {
            this.y = random(-max_orc*this.h, -this.h);
            this.x = random(this.w, width - this.w);
            this.dy = random(1, 3);
        }
        
        if (frameCount % 4 == 1) {
            this.img = orc1;
        } else if (frameCount % 4 == 3) {
            this.img = orc3;
        } else {
            this.img = orc2;
        } 
    }
    
    display() {
        image(this.img, this.x, this.y);
    }
    
}