class Torres{
    constructor(posX,posY){
       this.posX = posX;
       this.posY = posY;
       this.img = loadImage("./imagenes/torre.png");
    }


    shoot(balas){
        balas.push(new BalasHacks(this.posX, this.posY));
    }

    dibujar(){
        image(this.img,this.posX,this.posY,50,50);
    }

    selectTarget(enemys){
        let baseDist = dist(this.posX, this.posY, enemys[0].getPosX, enemys[0].getPosY);
        let minDistIndex = 0;
        for (let index = 0; index < array.length; index++) {
            const element = enemys[index];
            let newDistance = dist(this.posX, this.posY, enemys[index].getPosX, enemys[index].getPosY);
            if(newDistance <= baseDist){
                baseDist = newDistance;
                minDistIndex = index;
            }
        }
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
}