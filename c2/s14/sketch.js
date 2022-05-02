let bodo;
let txtArray;
let fontSize = 400;
let canvas;

function preload()
{
  bodo = loadFont("bodo.otf");
}

function setup() {
  canvas = createCanvas(400, 400);
  pixelDensity(1);
  frameRate(5);
  mMask = createGraphics(128, 128);
textFont(bodo);
  textSize(fontSize);
  //stroke(12, 2, 194);
  

}
function draw() {
  var x = width/2;
  var y = 173;
  var fontSize = 750;
  var w = width;
  var h = height;
  var n =100;
  var sinn = sin(frameCount)/1000;
  
  // https://editor.p5js.org/matthias-jaeger-net/sketches/WDP1L8XFA
      canvas.loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      canvas.set(x, y, color(random(0, 100), 20, 255))
    }
  }
  canvas.updatePixels()
  
  push();
  //n=2000*random(2000,3000);
  //background(270,100,100);
  textFont(bodo);
  textSize(fontSize);
  textAlign(CENTER, CENTER);


  for (let r = 0.0; r < 5; r += 0.1) {
    fill(20,255,100)
  ellipse(250+(r*n/9), 200+(r*n/9), 300, 300);
  }
  
  // code from https://www.deconbatch.com/2022/01/blendmode-add.html
  blendMode(ADD);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(270,90,1);
     
     text("B",100+x*r*noise(n),140+y* r*noise(n));
    }
    rotate(20);
    //translate(20,20);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(200,90,1, 49);
     text("B",400+x*r*noise(n),140+y* r*noise(n));
    }
    rotate(120);
    translate(20,20);
    for (let r = 0.0; r < 0.5; r += 0.01) {
    fill(100*sinn,90,1, 49);
     text("B",300+x*r*sinn,140+y* r*noise(n));
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