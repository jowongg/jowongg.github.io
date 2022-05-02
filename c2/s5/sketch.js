let fred;
let fontSize = 500;
let txtArray;

function preload(){
  fred = loadFont("Fred.ttf")
  frameRate(12);
}

function setup() {
  createCanvas(550, 550);
  textFont(fred);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  
  
}

function draw() {
  var w = width/2;
  var h = height/2
  background(255);
  //text();
  txtArray = fred.textToPoints("B", 140, h+170, fontSize, {sampleFactor: 0.4});
  //noStroke();
  
  for(i=0;i< txtArray.length; i++){
    circle(txtArray[i].x, txtArray[i].y, 80);
    stroke(40+i*(random(20)));
    //fill(i/(random(20)));
    fill(i*(random(20)), 10, 100);
  }
  
  
}