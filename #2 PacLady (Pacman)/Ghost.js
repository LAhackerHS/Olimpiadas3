class Ghost {

  //Elementos necesarios para construir un fantasma
  constructor(x, y, direction, image) {
    this.x = x;
    this.y = y;

    this.direction = direction;

    this.image = image;

  }

  display() {

   image (this.image, this.x, this.y,50,50);

     this.special(); 
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }
}