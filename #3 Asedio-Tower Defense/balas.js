class Balas{
    constructor(posX,posY){
       this.posX = posX;
       this.posY = posY;
       this.img = loadImage("./imagenes/bala.png");
    }

    dibujar() {
       image(this.img,this.posX,this.posY,50,50);
    }

    move(enemigos){
        if(enemigos.getPosX > this.posX){
            this.posX = this.posX + 1;
        } 
        if(enemigos.getPosX < this.posX){
            this.posX = this.posX - 1;
        }
        //Movimiento Y
        if(enemigos.getPosY > this.posY){
            this.posY = this.posY + 1;
        }
        if(enemigos.getPosY < this.posY){
            this.posY = this.posY - 1;
        }
    }

    get getPosX(){
        return this.posX;
    }

    set setPosX(posX){
        this.posX = posX;
    }

    get getPosY(){
        return this.posY;
    }

    set setPosY(posY){
        this.posY = posY;
    }

}