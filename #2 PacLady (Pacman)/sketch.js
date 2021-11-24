let pacman = new Pacman(50, 50);

let fucsiaImage;
let pinkImage;

let fucsiaGhost; 
let pinkGhost;


let gold = [];

function setup() {
  createCanvas(350, 350);
  rectMode(CENTER);

  fucsiaImage = loadImage("./image/fucsia.png");
  pinkImage = loadImage ("./image/pink.png");

  fucsiaGhost = new FucsiaGhost(100, 100, 1, fucsiaImage);
  pinkGhost = new PinkGhost(200, 100, 0, pinkImage);

  //Se crea un arreglo para las monedas
  for (let i = 0; i < 40; i++) {
    let x = Math.random() * (400 - 6) + 6;
    let y = Math.random() * (400 - 6) + 6;
    gold.push(new Gold(x, y, 255, 0, 0));
  }
}

function draw() {
  background(173, 216, 230);

  //Pinta el pacman 
  pacman.display();

  //Movimiento en todas la direcciones para el pacman 
  function validateKey() {
    if (keyIsDown(97) || keyIsDown(65)) {
      pacman.move(key);
    }
    if (keyIsDown(68) || keyIsDown(100)) {
      pacman.move(key);
    }
    if (keyIsDown(87) || keyIsDown(119)) {
      pacman.move(key);
    }
    if (keyIsDown(83) || keyIsDown(115)) {
      pacman.move(key);
    }
  }

  //Se valida la pisición del pacman y de las monedas para que se las coma
  validateKey();
  for (let i = 0; i < gold.length; i++) {
    gold[i].display();
    if (gold[i].eat(pacman.getX(), pacman.getY(), 40/2)) {
      gold.splice(i, 1);
    }
  }

  //Cuando se pierde al tocar el fantasma fucsia
  if (pacman.gameOver(fucsiaGhost.getX(), fucsiaGhost.getY(), 30)) {
    console.log("Game Over");
    location.reload();
  }

  fucsiaGhost.display(); //Se pinta el fantasma fucsia
  fucsiaGhost.move(); //Se mueve el fantasma fucsia
  
  //Cuando se pierde al tocar el fantasma pink
  if (pacman.gameOver(pinkGhost.getX(), pinkGhost.getY(), 30)) {
    console.log("Game Over");
    location.reload();
  }

  pinkGhost.display(); //Se pinta el fantasma pink 
  pinkGhost.move(); //Se mueve el fantasma pink
}