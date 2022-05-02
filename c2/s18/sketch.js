// tutorial from https://www.youtube.com/watch?v=me04ZrTJqWA
let img;
function preload(){
  img = loadImage("b.png");
}
function setup() {
  createCanvas(500, 500);
  //frameRate(2);
  //let nCX = ()
  
}

function draw() {
  //background(220);
  for(let col=0; col<img.width;col+=3)
    {
      for(let row=0; row<img.height;row+=3)
      {
        let xPos =col;
        let yPos= row;
        let c = img.get(xPos, yPos);
        
        push();
        translate(xPos-180,yPos);
        noFill();
        strokeWeight(random(3));
        stroke(color(c));
        line(xPos,sin(xPos)*40,xPos,sin(yPos)*20);
        //curve(xPos,yPos, sin(xPos)*60, cos(xPos)*sin(xPos)*40, 0,0,cos(yPos)*sin(xPos)*random(140), cos(xPos)*sin(xPos)*50);
        pop();
      }
    }
}