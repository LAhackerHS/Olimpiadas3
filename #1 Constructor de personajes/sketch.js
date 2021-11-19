let user1 = new Usuarios(150,0,153,153, true,255,220,177,41,53,131,255,161,15);
let user2 = new Usuarios(400,0,204,102, true,165,126,110,115,55,207,77,55,15);
let user3 = new Usuarios(650,204,204,0, false,75,57,50,137,176,59,38,31,5);
let user4 = new Usuarios(900,127,0,255,false,236,191,113,238,105,142,255,229,101);

function setup() {
  createCanvas(1050, 600);
}

function draw() {
  background(255,204,229);
  user1.pintar();
  user2.pintar();
  user3.pintar();
  user4.pintar();

}
