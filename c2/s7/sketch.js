let xspacing =14; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 40.0; // Height of wave
let period = 400.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

let san;

let fontSize = 400;

function preload()
{
  san = loadFont("san.otf");
}
function setup() {
  createCanvas(500, 500);
  w = width +16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  //textFont("san.otf");
  textSize(width);
  
}

function draw() {
  //background(0);
  
  calcWave();
  renderWave();
 
  
}

// sin wave from https://p5js.org/examples/math-sine-wave.html
function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  stroke(200);
  //noStroke();
  
  // A simple way to draw the wave with an ellipse at each location
  
  for (let x = 0; x < yvalues.length; x++) {
    
    textSize(80);
    fill(250);
    
    rect(x * xspacing, height / 2 + yvalues[x], 16, 406);
    
    text("B",x * xspacing, height / 2 + yvalues[x])
    fill(255,0,0);
    circle(width/x,height/x, 100)
    circle(250,350, 100)
    
    
    //text("B", random(width),random(height));
  }
}