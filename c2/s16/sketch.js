let dim;
function preload() {
  san = loadFont("san.otf");
  
}
function setup() {
  createCanvas(500, 500);
  dim = width / 2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(8);

}

function draw() {
  var x = width/2;
  var y = 173;
  var fontSize = 450;
  var w = width;
  var h = height;
  var n =100;

  background(220,100,100);
  textFont(san);
  
  textAlign(CENTER, CENTER);

  // code based on Creativeguru97 -  https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
  textSize(20);
  fill(70,20,120);
   for(i=0;i< 18; i++)
     {
        text("B. b bbb. Bbb bbBBBb", 100,20+i*20);

     }
 
  txtArray = san.textToPoints("B", w/2-140, h-100, fontSize, {sampleFactor: 0.023});
  noStroke();
  textSize(fontSize);
  for(i=0;i< txtArray.length; i++){
    drawGradient(txtArray[i].x+random(11), txtArray[i].y+random(11));

    //stroke(40+i*(random(20)));
    //fill(i*(random(10)), 10, 100);
  }

}

// code based on Creativeguru97 -  https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/radical_gradient/sketch.js
function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  // for (let r = radius; r > 0; --r) {
  //   fill(10*h, 30, 90);
  //   ellipse(x, y, r*0.18, r*0.18);
  //   h = (h + 1) % 360;
  // }
  for (let r = radius; r > 0; --r) {
    fill(90, r, 90);
    //fill();
    ellipse(x, y, r*0.18, r*0.18);
    h = (h + 1) % 360;
  }

}
