class PinkGhost extends Ghost {
    constructor(x, y, direction, image) {
        super(x, y, direction, image);
    }

    special() {
        this.bounce();
    }

    bounce() {
        if (this.y > 370) {
            this.direction = 0;
        } else if (this.y < 10) {
            this.direction = 1;
        }
    }

    move() {
        if (this.direction === 0) {
            this.y--;
        } else {
            this.y++;
        }
    }
}