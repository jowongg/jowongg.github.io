let fred;
let fontSize = 400;
let txtArray;
var i = 0;
function preload(){
  fred = loadFont("san.otf")
  frameRate(12);
}

function setup() {
  createCanvas(400, 400);
  textFont(fred);
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  frameRate(30);
  noStroke();
    radialGradient(
    width/2-40, height/2-120, 0,//Start pX, pY, start circle radius
    width/2-40, height/2-120, 380,//End pX, pY, End circle radius
    color(120, 0, 200), //Start color
    color(310, 0, 120) //End color
  );
  rect(0,0,width,height);
  //background(5);
  
  
  
}

function draw() {
  var w = width/2;
  var h = height/2;
  var r = sin(frameCount/100);
  var c = map(r, -1,1,0,255);
  //blendMode(SCREEN);
  
  //text();
  txtArray = fred.textToPoints("B", w-130, h+140, fontSize, {sampleFactor: 0.4});
  //noStroke();
  
//   for(i=0;i< txtArray.length; i++){
//     noStroke();
//     fill(c, 255, 255);
//     circle(txtArray[i].x, txtArray[i].y, 70);
//     //stroke(40+i*(random(20)));
    
//   }
  noStroke();
    fill(c, map(mouseX, 0, width,0,255), 255);
  if(i != txtArray.length-1)
    {
      i+=1;
      //stroke(10+(random(100)), 20,100);
      circle(txtArray[i].x, txtArray[i].y, 70);
    }
  else if(i == txtArray.length-1)
    {
      //background(5);
      i=0;
      
    }
    
  
  
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
