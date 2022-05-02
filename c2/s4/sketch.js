
function preload() {
  san = loadFont("san.otf");
  
}
function setup() {
  createCanvas(550, 550);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  //frameRate(30);
  //filter(BLUR, 8);
}

function draw() {
  var x = width/2;
  var y = 173;
  var fontSize = 750;
  var w = width;
  var h = height;
  var n =100;
  

  
  
  push();
  //n=2000*random(2000,3000);
  background(270,100,100);
  textFont(san);
  textSize(fontSize);
  textAlign(CENTER, CENTER);

  // code based on Creativeguru97 -  https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
  radialGradient(
    width/2-40, height/2-120, 0,//Start pX, pY, start circle radius
    width/2-40, height/2-120, 380,//End pX, pY, End circle radius
    color(30, 100, 100, 1.0), //Start color
    color(310, 100, 100, 0.4) //End color
  );
  for (let r = 0.0; r < 6; r += 0.1) {
  ellipse(250+(r*n/9), 200+(r*n/9), 400, 400);
  }
  
  // code from https://www.deconbatch.com/2022/01/blendmode-add.html
  blendMode(ADD);
    for (let r = 0.0; r < 0.5; r += 0.01) {
	// Red
	// fill(0, 90, 1, 100);
	// circle(w * 0.4, h * 0.7, 2*w * r);
	// // Green
	// fill(120, 90, 1, 100);
	// circle(w * 0.6, h * 0.4, 2*w * r);
	// // Blue
	// fill(10, 30, 1, 100);
	// circle(w * 0.5, h * 0.6, 2*w * r);
    fill(270,90,1);
     text("B",100+x*r*noise(n),140+y* r*noise(n));
    }
    rotate(20);
    //translate(20,20);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(200,90,1, 49);
     text("B",400+x*r*noise(n),140+y* r*noise(n));
    }
    rotate(20);
    translate(20,20);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(200,90,1, 49);
     text("B",300+x*r*noise(n),140+y* r*noise(n));
    }
    
    translate(-120,120);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(200,90,1, 49);
     text("B",300+x*r*noise(n),140+y* r*noise(n));
    }
  
  n=2000*random(2000,3000);
  pop();
  //filter(BLUR, 8);
}

// code based on Creativeguru97 -  https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE){
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}
