class RightPlayer {
    constructor(x, y, base, altura){
        this.x = x;
        this.y = y;
        this.base = base;
        this.altura = altura;
        this.r = 93;
        this.g = 220;
        this.b = 185;
    }
    pintar(){
        noStroke();
        fill(93,220,185);
        rect(this.x, this.y, this.base, this.altura);
    }
    mover(){
        if(keyIsPressed) {
         switch(key){
             case 'i':
                 this.y -= 8;
                 break;
             case 'k'://DOWN
                 this.y += 8;
                 break;
         }
         }
     }
    
    getX(){
        return this.x;
    }
    setX(x){
        this.x = x;
    }
    getY() {
        return this.y;
    }
    setY(y) {
        this.y = y;
    }
    getBase(){
        return this.base;
    }
    setBase(base){
        this.base = base;
    }
    getAltura(){
        return this.altura;
    }
    setBase(altura){
        this.altura = altura;
    }   
}