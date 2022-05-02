let webCam;
let videoMesh;
let myShader;
let drawStoke = false;
let displaceAmt;
let myImage;
let useCamera = false;

function preload() {
  
  //load a 3d model
  videoMesh = loadModel('VideoMesh.obj');
  
  // image by Adam Ferriss / Buck Design
  myImage = loadImage('p.png');
  
  // load our shader
  // note that shader names don't have to be the same
  // this is useful when multiple shaders use the same .vert or .frag file
  // you don't need to write code multiple times
  myShader = loadShader('displace.vert', 'default.frag');
  
  //*/ /*
//   capture = createCapture(VIDEO);
//   capture.size(640, 480);
//   capture.hide(); // hide it
  
}

function keyPressed(){
  
  // press spacebar to enable/disable drawing strokes
  
  if( keyCode == 32){
    
     drawStoke= !drawStoke;
  } 
}

function setup() {
   
  // 640 x 480 canvas
  createCanvas(500, 500, WEBGL);
  
  displaceAmt = createSlider(0.0, 4.0, 1.0, 0);
  displaceAmt.position(10, height + 5);
  displaceAmt.style('width', '200px');
  

}

function draw() {
  //16, 31, 79
  background(255);
  //sphere(20);
  // elapsed time in seconds
  let elapsedSeconds = millis()/1000;
  let rotationAngle = TWO_PI*elapsedSeconds*0.05;
  
  noStroke();
  rotate(60);
  push();
  
  // rotate and scale mesh
  // we scale it 250x to bring it to the dimensions of our 3D world
  // model/object space => world space
  
  let aspect = myImage.height / myImage.width;

  scale(60,60,60);  
  
  // begin the shader
  // send uniform data
  shader(myShader);
  myShader.setUniform("uTime", elapsedSeconds);
  myShader.setUniform("uSpeed", 0.01);
  myShader.setUniform("uTexture0", myImage);
  myShader.setUniform("uDisplacementAmt", displaceAmt.value());
  
  
  if( drawStoke ) {
    stroke(255, 0, 0);
  } else {
    noStroke();
  }
  
  let rotX = noise(elapsedSeconds*0.2, 0) * 2 - 1; 
  let rotY = noise(elapsedSeconds*0.2, 100) * 2 - 1; 
  
  // rotate based on random numbers
  rotateY(rotY); 
  rotateX(rotX); 
  
  // draw the 3D model
  model(videoMesh);
  
  pop();

}