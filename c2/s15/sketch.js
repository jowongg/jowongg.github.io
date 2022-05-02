// 3d text function from https://github.com/FreddieRa/p5.3D
let c =250;

function preload(){
  han = loadFont("han.ttf")
  //frameRate(12);
}

function setup() {
  createCanvas(500, 500, WEBGL);
  textFont(han);
  wordObject = createWord3D(
  "B",       // The actual character that you want to draw
  59,        // How thick the 3D rendered letter is
  3,         // The size of a unit "box()" making up part of the letter  
  100,   // The size of the canvas it renders the letter on (higher is more detailed, 20-30 is a good range)  
  true,     // [OPTIONAL, default = true] Gives the bevelled, embossed 3D look (as seen in screenshot)  
  "han",         // [OPTIONAL, default = "Georgia"] Gives the font uses, can be any default ones or anything added  
  BOLD         // [OPTIONAL, default = BOLD] Gives the chosen style out of BOLD, NORMAL, ITALIC  
)
}

function draw() {
  
  background(220,0,100);
  //grid from https://editor.p5js.org/Tiri/sketches/Sk_-uQu6
    //grid from https://editor.p5js.org/Tiri/sketches/Sk_-uQu6
  //For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(20,10,190);
			strokeWeight(0.5);
			line(x-c, 0-c, x-c, height-c);
			line(0-c, y-c, width-c, y-c);
		}
	}
  
  rotateY(millis() / 1000);
  rotateZ(millis() / 1000);
  //rotateY(millis() / 1000);
  push();
  translate(-70,40,0);
  wordObject.show();
  pop();
  push();
  translate(0,0,0);
  wordObject.show();
  pop();
  stroke(255);
  noFill();
  //sphere(220);
  
}