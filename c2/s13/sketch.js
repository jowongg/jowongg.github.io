let fred;
let fontSize = 400;
let txtArray;

function preload(){
  fred = loadFont("Fred.ttf")
  frameRate(12);
}

function setup() {
  createCanvas(500, 500, WEBGL);
  textFont(fred);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  
  
}

function draw() {
  var w = width/2;
  var h = height/2
  //background(0);
  background(200*sin(frameCount/100),10,100);
  //text();
  txtArray = fred.textToPoints("B", -110, 140, fontSize, {sampleFactor: 0.3});
  //noStroke();
  push();
  noFill();
  stroke(255);
  scale(50);
  rotateY(millis()/1000);
  box(20)
  pop();
  for(i=0;i< txtArray.length; i++){
    //rotateX(millis()/1000);
    //box(20,20,20,txtArray[i].x, txtArray[i].y);
    push();
    rotateX(millis()/1000);
    circle(txtArray[i].x, txtArray[i].y, 100);
    pop();
    circle(txtArray[i].x, txtArray[i].y, 100);
    stroke(i/(random(10)));
    //fill(i*(random(20)));
    fill(i*(random(20)), 10, 100);
  }
  
  
}