class BalasHacks{
    constructor(posX,posY){
       this.posX = posX;
       this.posY = posY;
       this.img = loadImage("./imagenes/balita.png");
    }

    dibujar() {
        //fill(255);
        //ellipse(this.posX,this.posY,25,25);
        image(this.img,this.posX,this.posY,50,50);
    }

    get getPosX(){
        return this.posX;
    }
    get getPosY(){
        return this.posY;
    }

    set setPosX(posX){
        this.posX = posX;
    }

    set setPosY(posY){
        this.posY = posY;
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

}