let fred;
let fontSize = 500;
let txtArray;

function preload(){
  fred = loadFont("Fred.ttf")
  frameRate(12);
}

function setup() {
  createCanvas(500, 500);
  textFont(fred);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  
  
  
}

function draw() {
  var w = width/2;
  var h = height/2
  background(255);
  fill(0);
  rect(29,35, width-70, height-70);
  strokeWeight(55);
  txtArray = fred.textToPoints("B", w-140, h+165, fontSize, {sampleFactor: 0.3});
  
  var r = sin(millis()/300);
  
  for(i=0;i< txtArray.length-1; i++){
    stroke(20);
    line(txtArray[i].x, txtArray[i].y, txtArray[20].x, txtArray[30].y);
    stroke(i*(random(20)));
    //stroke(map(r*i,0,300,0,255), 10, 100);
    line(txtArray[i].x, txtArray[i].y, txtArray[i+1].x, txtArray[i+1].y);
    
  }
  noStroke();
  
  
}