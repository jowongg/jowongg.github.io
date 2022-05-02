// tutorial from https://www.youtube.com/watch?v=me04ZrTJqWA
let img;
var slider;
function preload(){
  img = loadImage("b.png");
}
function setup() {
  createCanvas(img.width,img.height);
  slider = createSlider(0, 255, 100);
  //frameRate(2);
  //let nCX = ()
  
}

function draw() {
  //background(220);
  //slider = createSlider(0, 255, 100);
  //var num = slider;
  for(let col=0; col<img.width;col+=3)
    {
      for(let row=0; row<img.height;row+=3)
      {
        let xPos =col;
        let yPos= row;
        let c = img.get(xPos, yPos);
        
        push();
        translate(xPos,yPos);
        noFill();
        fill(1+row,10,1);
        strokeWeight(random(3));
        stroke(color(c));
        circle(xPos*random(0.1),yPos*random(0.1),slider.value());
        //line(xPos,sin(xPos)*40,xPos,sin(yPos)*20);
        //curve(xPos,yPos, sin(xPos)*60, cos(xPos)*sin(xPos)*40, 0,0,cos(yPos)*sin(xPos)*random(140), cos(xPos)*sin(xPos)*50);
        pop();
      }
    }
}