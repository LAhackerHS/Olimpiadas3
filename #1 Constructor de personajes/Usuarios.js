class Usuarios {
    constructor(x, r, g, b, genero, r2, g2, b2, r3, g3, b3, r4, g4, b4){

		//Posicion
		this.x =x;
		this.y = 300;

		//Color del circulo usuario (RGB)
		this.r = r;
		this.b = b;
		this.g = g;

		//Genero (M o F)
		this.genero = genero;

		//Tono de piel (RGB)
		this.r2 = r2;
		this.b2 = b2;
		this.g2 = g2;

		//Color ropa (RGB)
		this.r3 = r3;
		this.b3 = b3;
		this.g3 = g3;

		//Color pelo (RGB)
		this.r4 = r4;
		this.b4 = b4;
		this.g4 = g4;   
    }

    pintar(){

		noStroke();
	
		//Color del circulo
		fill(this.r,this.g,this.b);
		circle(this.x,this.y, 200);

		//Camisa
		fill(this.r3,this.g3,this.b3);
		arc(this.x,this.y,200,200,PI/3-((PI/180)*40), 2*PI/3+((PI/180)*40));

		//Deco camisa
		fill(255);
		triangle(this.x-15,305,this.x,350,this.x+15,305);

		//Cara y pelo F
			if (this.genero==true) {

				fill(this.r4,this.g4,this.b4);
				rect(this.x -60,this.y -50, 47, 65, 44, 0, 20, 0);

				
                fill(this.r2,this.g2,this.b2);
				rect(this.x, this.y-40, 90, 80, 0, 0, 40, 40);

			}
		// Cara y pelo M	

			if (this.genero==false) {

				fill(this.r2,this.g2,this.b2);
		        rect(this.x, this.y-40, 90, 80, 0, 0, 20, 20);

			}

		//Cuello
		fill(this.r2,this.g2,this.b2);
		rectMode(CENTER);
		rect(this.x,this.y-10,30,30);

		//Ojos
		fill(255);
		ellipse(this.x-20,this.y-55,17,25);
		ellipse(this.x+20,this.y-55,17,25);

		fill (0);
		ellipse(this.x-20,this.y-55,11,19);
		ellipse(this.x+20,this.y-55,10,18);

		fill(255);
		ellipse(this.x + 24,this.y - 55,5,5);
		ellipse(this.x - 15,this.y - 55,5,5);
		

		//Sonrisa
		noStroke();
		fill(255);
		arc(this.x,this.y-30,30,30,0,PI);

		fill(224,224,224);
		rect(this.x, this.y-23,26,3);

		
		if (this.genero==false) {
			noStroke();

			//Pelo
			fill(this.r4,this.g4,this.b4);
			rect(this.x - 3, this.y - 95, 100, 50, 0, 46, 0, 37); // parte de arriba
			rect(this.x - 43, this.y - 60, 7, 40); //Patilla izquierda
            rect(this.x + 43, this.y - 60, 7, 30); //Patilla derecha

		}
		
		if (this.genero==true) {
			noStroke();

			//Pelo
			fill(this.r4,this.g4,this.b4);

			rect(this.x - 43, this.y - 60, 7, 45);
			rect(this.x - 3, this.y - 94, 100, 45, 50, 46, 0, 37); 
			
   
		}
    }
}