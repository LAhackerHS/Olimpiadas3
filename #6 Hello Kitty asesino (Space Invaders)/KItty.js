class Kitty {
    constructor(x,y, image) {
        this.x = x;
        this.y = y;
        this.image = image
    }
    
    show() {

    //fill(0, 153, 0);

    image(this.image, this.x, this.y,100,100);
    rectMode(CENTER);
    //rect(this.x, this.y, 156, 86, 23, 23, 23, 23);
        
    }

    shoot() {
        return true;
    }
    
    move(dir) {
        switch (dir) {
            case "RIGHT":
                this.x += 50
                break;
            case "LEFT":
                this.x -= 50
                break;

        }

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

}