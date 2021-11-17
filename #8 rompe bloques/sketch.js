let ball;
let paddle;
let bricks = [];
let w, h;
let gameStarted = false;
let gameInfo = true;
let gameOver = false;
let gameWon = false;

function setup() {
  createCanvas(640, 700);

  ball = new Ball(width / 2, height - 94);
  paddle = new Paddle(width / 2, height - 80, 90, 12);
  
  createBricks(1);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    paddle.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    paddle.setDir(-1);
  }
  
  if (key == "1") {
    createBricks(1);
  } else if (key == "2") {
    createBricks(2);
  }
  
  if (keyCode === ENTER) {
    gameInfo = true;
    gameOver = false;
    gameStarted = false;
    gameWon = false;
    ball.reset();
    paddle.reset();
    createBricks(1);
  }
  
  if (key === ' ') {
    gameStarted = true;
    gameInfo = false;
    gameWon = false;
    gameOver = false;
  }


}

function keyReleased() {
  paddle.setDir(0);
}

function draw() {
  background(20,20,20); //color solo del fondo 
    
  //para que monk se ria 
  textSize(30);
  fill(255);
  strokeWeight(4);
  text("Coloqueme 5 profe", 325, 50);
  
  for (let brick of bricks) {
    brick.render();
  }
  ball.render();
  paddle.render();
  ball.edges();
  ball.end();
  ball.won();

  if (gameInfo && !gameStarted && !gameOver && !gameWon) {
    textAlign(CENTER, CENTER);
    textSize(15);
    fill(255);
    noStroke(0);
    text("Flechas para moverse", width / 2, height / 2);
    text("Espaciadora para iniciar", width / 2, height / 2 + 50);
    ball.pos.x = paddle.pos.x;
  }

  if (gameStarted && !gameInfo && !gameOver && !gameWon) {
    paddle.update();
    ball.update();  
    ball.bounce(paddle);
    
    let ABBrick = false;
    for (let i = bricks.length - 1; i >= 0; i--) {
      let brick = bricks[i];
      if (ball.colliding(brick)) {
        if (ABBrick === false) {
          ball.bounceOff(brick);
          ABBrick = true;
        }
        bricks.splice(i, 1);
      }
    }
  }
 //este por si pierde texto en pantalla 
  if (gameOver && !gameStarted && !gameInfo && !gameWon) {
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Enter para jugar otra vez", width / 2, height / 2 + 75);
  }
  //si es que gana texto en pantalla
  if (gameWon && !gameOver && !gameStarted && !gameInfo) {
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Ganaste!!!Enter para jugar otra vez", width / 2, height / 2 + 75);
  }
}


//los ladrillos
function createBricks(level) {
  if (level === 1) {
    bricks.splice(0);
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 7; j++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, 7-j));
      }
    }
  } else if (level === 2) {
    bricks.splice(0);
    for (let j = 0; j < 14; j++) {
      for (let i = 0; i < j+1; i++) {
        w = width / 14;
        h = 15;
        bricks.push(new Brick(i * w + w / 2, j * h + h / 2 + 75, w, h, (2*(14-i)-1) % 8));
      }
    }
  }
}