class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tam = 5;
        this.alive = true;
        this.refBall;
    }

    show() {
        fill(255, 0, 128);
        noStroke();
        ellipse(this.x, this.y, this.tam, this.tam)
        this.move();
    }

    move() {
        this.y--;
        if (this.y < 0) {
            this.alive = false;
        }
    }

    isAlive() {
        return this.alive;
    }


    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    getTam() {
        return this.tam;
    }


    
}