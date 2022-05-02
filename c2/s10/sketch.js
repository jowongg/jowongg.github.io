let c =0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  var r = sin(millis() / 500);
  //console.log(r);
  background(210*r,10*r,190);
  fill(255);
  noFill();
  
  //grid from https://editor.p5js.org/Tiri/sketches/Sk_-uQu6
  //For (var BEGIN; END; INTERVAL){
	//DO SOMETHING }
	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(20,10*r,190);
			strokeWeight(0.5);
			line(x-c, 0-c, x-c, height-c);
			line(0-c, y-c, width-c, y-c);
		}
	}
  
  strokeWeight(2);
    
  for(i=0;i<18;i++)
    {
      //sin(millis() / 1000)
      
      //var r = sin(i)*random(20);
      stroke(250*r,3+i*20,190*r);
      circle(220, 140, i*10);
      circle(220, 270, i*12);
    }
  for(i=0;i<18;i++)
    {
      strokeWeight(4);
      rect(105-i, 50-i, 40-i*10, 300-i*50);
      strokeWeight(2);
      rect(405-i, 250+i, 40-i*10, 300-i*50);
      rect(405-i, 430+i, 300-i*50, 40-i*10);
    }
  
  //rect(105, 50, 30, 20);

}


// function draw() {
//   background(220);
//   noFill();
//   for(i=0;i<300;i++)
//     {
//       circle(width/2, 150, i*4);
//       circle(width/2, height/2, i*4);
//     }
// }