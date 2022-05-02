let dela;
function preload() {
  dela = loadFont("Dela.ttf");
  
}
function setup() {
  createCanvas(550, 550);
  background(color("#5edaff"));
  textFont(dela);
  textSize(width/ 4);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(color("#fff8d9"));
  let time = millis();
  
  fill(255, 74, 202);
  textSize(width*1.25);
  text('B',300,120);
  
  for(i=0; i<90; i++)
  {
    textSize(width/ 4);
    strokeWeight(2);
    stroke(color('#b51d87'));
    fill(255, 74+(i*3), 202);
    text('B', (i*5), 20+i);
  }
  for(i=0; i<90; i++)
  {
    textSize(width/ 4);
    strokeWeight(2);
    stroke(color('#b51d87'));
    fill(255, 74+(i*3), 202);
    text('B', (i*5), 150+i);
  }
  for(i=0; i<90; i++)
  {
    textSize(width/ 4);
    strokeWeight(2);
    stroke(color('#b51d87'));
    fill(255, 74+(i*3), 202);
    text('B', (i*5), 280+i);
  }
  
  for(i=0; i<90; i++)
  {
    textSize(width/ 4);
    strokeWeight(2);
    stroke(color('#b51d87'));
    fill(255, 74+(i*3), 202);
    text('B', (i*5), 410+i);
  }
  
  
}