class Enemigos{
    constructor(posX,posY,vida){
       this.posX = posX;
       this.posY = posY;
       this.vida = vida;
       this.img = loadImage("./imagenes/enemigo.png");
    }

    dibujar() {
        //fill(0,255,0);
        //ellipse(this.posX,this.posY,50,50);
        image(this.img,this.posX,this.posY,50,50);
    }
    
    caminar(torre){
        //Movimiento X
        if(torre.getPosX > this.posX){
            this.posX = this.posX + 1;
        } else if(torre.getPosX < this.posX){
            this.posX = this.posX - 1;
        }
        //Movimiento Y
        if(torre.getPosY > this.posY){
            this.posY = this.posY + 1;
        } else if(torre.getPosY < this.posY){
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

    get getVida(){
        return this.vida;
    }

    set setVida(vida){
        this.vida = vida;
    }

}