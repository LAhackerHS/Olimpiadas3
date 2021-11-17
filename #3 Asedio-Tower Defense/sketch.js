//nuestros atributos
let balas = [];
let protagonista;
let enemigos = [];
let enemigoChange = [];
let posX, posY;

let enemigosSize;

let vida;

let ataquesPOTENTE;

let a;


//Funciones
function setup() {
    createCanvas(500, 500);
    //Torreta principal
    protagonista = new Torres(450, 450);

    //Enemigos
    vida = 3;
    ataquesPOTENTE = false;

    for (let index = 0; index < 2; index++) {
        enemigos.push(new Enemigos(random(0, 500), random(0, 200), vida));
    }

    balas = new Array(1);
    
    //Balas
    for (let index = 0; index < balas.length; index++) {
        balas[index] = new BalasHacks(protagonista.getPosX, protagonista.getPosY);
    }

    balas2 = new Array(1);
    
    //Balas
    for (let index = 0; index < balas2.length; index++) {
        balas2[index] = new Balas(protagonista.getPosX, protagonista.getPosY);
    }


}

function draw() {
    background(0);
    //torreta
    protagonista.dibujar();

    generador();
    //enemigo
    for (let EnemyArray = 0; EnemyArray < enemigos.length; EnemyArray++) {
        enemigos[EnemyArray].dibujar();
        enemigos[EnemyArray].caminar(protagonista);
        //distancia entre enemigo y torreta
        let distanciaProtagonistaVsEnemigos = dist(enemigos[EnemyArray].getPosX,
            enemigos[EnemyArray].getPosY,
            protagonista.getPosX,
            protagonista.getPosY);

        //index enemigo
        let focusThisEnemy = newIndex(enemigos);

        //para validar
        let newDistance = dist(enemigos[focusThisEnemy].getPosX,
            enemigos[focusThisEnemy].getPosY,
            protagonista.getPosX,
            protagonista.getPosY);

        if (newDistance < 250) {
            ataques(balas, enemigos, EnemyArray, 1);
            if (frameCount % 30 === 0) {
                ataquesPOTENTE = true;
            }
            if(ataquesPOTENTE == true){
                ataques(balas2, enemigos, EnemyArray, 3);
            }
        }

        //Condicion de balas torreta

    }
}

function generador() {
    if (frameCount % 360 === 0) {
        for (let index = 0; index < 2; index++) {
            enemigos.push(new Enemigos(random(0, 500), random(0, 200), vida));
        }
    }
}

function newIndex(enemys) {
    //Crear un nuevo 
    let baseDist = dist(protagonista.getPosX, protagonista.getPosY, enemys[0].getPosX, enemys[0].getPosY);
    let minDistIndex = 0;
    for (let index = 0; index < enemys.length; index++) {
        const element = enemys[index];
        let newDistance = dist(protagonista.getPosX, protagonista.getPosY, enemys[index].getPosX, enemys[index].getPosY);
        if (newDistance <= baseDist) {
            baseDist = newDistance;
            minDistIndex = index;
        }
        return minDistIndex;
    }
}

function ataques(balasArray, enemigosArray, enemyArray, dañoDisparo) {
    for (let i = 0; i < balasArray.length; i++) {
        balasArray[i].dibujar();
        balasArray[i].move(enemigosArray[enemyArray]);
        let distbalasArrayVsEnemigos = dist(enemigosArray[enemyArray].getPosX,
            enemigosArray[enemyArray].getPosY,
            balasArray[i].getPosX,
            balasArray[i].getPosY);


        //Condición de las balasArray vs enemigos
        if (distbalasArrayVsEnemigos < 25) {
            enemigosArray[enemyArray].setVida = enemigosArray[enemyArray].getVida - dañoDisparo;
            balasArray[i].setPosX = protagonista.getPosX;
            balasArray[i].setPosY = protagonista.getPosY;

            if (enemigosArray[enemyArray].getVida <= 0) {
                enemigosArray.splice(enemyArray, 1);
            }
        }
    }
}

function mouseDragged() {

    let distMouse = dist(protagonista.getPosX, protagonista.getPosY, mouseX, mouseY);
    if (distMouse < 50) {
        protagonista.setPosX = mouseX;
        protagonista.setPosY = mouseY;
        for (let index = 0; index < balas.length; index++) {
            balas[index].setPosX = protagonista.getPosX;
            balas[index].setPosY = protagonista.getPosY;

        }
    }
}