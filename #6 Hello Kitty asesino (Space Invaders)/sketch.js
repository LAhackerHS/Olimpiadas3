let kitty;
let ball = [];
let bullets = [];
let looser = false;
let kittyImage;


function setup() {
  createCanvas(500, 500);

kittyImage = loadImage("./Image/kitty.png");

  kitty = new Kitty(200,400, kittyImage);
  for (let i = 0; i < 6; i++) {
    ball.push(new Ball(random(30, 500), random(-50, 0))); //bolas
  }
}

function draw() {
  background(255,192,203);

  kitty.show();
  for (let i = 0; i < ball.length; i++) {
    ball[i].show()
  }

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    removeDeathBullets();
  }

  validateImpact();
  validateLost();

  if (looser === true) {
    fill(255);
    textSize(70);
    textAlign(CENTER);
    text('GAME OVER', 250, 250);
  }
}

function mousePressed() {

  bullets.push(new Bullet(kitty.getX(), kitty.getY()));

}

function keyPressed() {
  switch (key) {
    case 'ArrowRight':
      kitty.move("RIGHT")
      break;
    case 'ArrowLeft':
      kitty.move("LEFT")
      break;
  }
}

function removeDeathBullets() {
  for (let i = 0; i < bullets.length; i++) {
    if (!bullets[i].isAlive()) {
      bullets.splice(i, 1);
      break;

    }

  }
}

function validateImpact() {
  for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < ball.length; j++) {
      if (dist(bullets[i].getX(), bullets[i].getY(), ball[j].getX(), ball[j].getY()) < ball[j].getTam() / 2) {
        ball.splice(j, 1);
        console.log("impact");
      }
    }
  }
}

function validateLost() {
  for (let i = 0; i < ball.length; i++) {
    if (ball[i].getY() >= 600) {
      looser = true;
    }
  }
}