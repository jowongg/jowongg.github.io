// based on https://p5js.org/examples/motion-bounce.html
let rad = 150; // Width of the shape
let xpos, ypos, dela; // Starting position of shape amd font

let xspeed = 6; // Speed of the shape
let yspeed = 6; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function preload() {
  dela = loadFont("Dela.ttf");
  
}
function setup() {

  createCanvas(550, 550);
  noStroke();
  frameRate(30);
  //ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 2;
  ypos = height / 2;
}

function draw() {
  
    background(color("#133bed"));
  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos +130> width || xpos < 0) {
    xdirection *= -1;
    fill(19, 237, 81)
    
  }
  if (ypos > height  || ypos < 100) {
    ydirection *= -1;
    fill(19, 237, 81)
    
  }

  // Draw the text
  textSize(rad);
  textFont(dela);
  ellipse(width/2, height/2, 300);
  for(i=0; i<20;i++)
    {
      fill(19+(i*10), 237, 81)
      text("B",xpos+i, ypos+i);
    }
  
}
