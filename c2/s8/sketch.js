// 3d text function from https://github.com/FreddieRa/p5.3D
let c =250;
function setup() {
  createCanvas(500, 500, WEBGL);
  wordObject = createWord3D(
  "B",       // The actual character that you want to draw
  9,        // How thick the 3D rendered letter is
  2,         // The size of a unit "box()" making up part of the letter  
  150,   // The size of the canvas it renders the letter on (higher is more detailed, 20-30 is a good range)  
  false,     // [OPTIONAL, default = true] Gives the bevelled, embossed 3D look (as seen in screenshot)  
  "Georgia",         // [OPTIONAL, default = "Georgia"] Gives the font uses, can be any default ones or anything added  
  BOLD         // [OPTIONAL, default = BOLD] Gives the chosen style out of BOLD, NORMAL, ITALIC  
)
}

function draw() {
  
  background(0,0,229);
  //grid from https://editor.p5js.org/Tiri/sketches/Sk_-uQu6
  //For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(255);
			strokeWeight(0.5);
			line(x-c, 0-c, x-c, height-c);
			line(0-c, y-c, width-c, y-c);
		}
	}
  rotateY(millis() / 1000);
  //rotateY(millis() / 1000);
  wordObject.show();
  stroke(255);
  noFill();
  sphere(220);
  
}