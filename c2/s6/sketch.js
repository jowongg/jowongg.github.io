let san;
let txtArray;
let fontSize = 400;
let fontSize2 = 300;
function preload()
{
  san = loadFont("san.otf");
}

function setup() {
  createCanvas(550, 550);
  background(0);
  frameRate(8);
  stroke(12, 2, 194);
  //fill(255, 20, 200);
  fill(255);
  rect(13,15, width-30, height-30);
}

function draw() {
  

  //ellipse(100, 100, 600);
  textFont("san.otf");
  
  var w = width/2;
  var h = height/2
  //text("B", 20, 20);
  
  txtArray = san.textToPoints("B", w-200, h+135, fontSize, {sampleFactor: 0.4});
  txtArray2 = san.textToPoints("b", w-10, h+165, fontSize2, {sampleFactor: 0.4});
  noFill();
  
  beginShape();
  
  for(i=0;i< txtArray.length; i++){
    stroke(random(i));
    line(txtArray[i].x, txtArray[i].y, txtArray[100].x, txtArray[620].y);
}
  
  for(i=0;i< txtArray2.length; i++){
    stroke(random(i));
    line(txtArray2[i].x, txtArray2[i].y, txtArray2[100].x, txtArray2[100].y);
}
  endShape();

}
