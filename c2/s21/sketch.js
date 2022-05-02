// tutorial from https://www.youtube.com/watch?v=me04ZrTJqWA
let img;
function preload(){
  img = loadImage("b.png");
  
}
function setup() {
  createCanvas(img.width,img.height);
  colorMode(HSB);
  //frameRate(2);
  //let nCX = ()
   //background(220);
 
  
}

function draw() {

  for(let col=0; col<img.width;col+=3)
    {
      for(let row=0; row<img.height;row+=3)
      {
        let xPos =col;
        let yPos= row;
        let c = img.get(xPos, yPos);
        
        push();
        translate(xPos,yPos);
        //noStroke();
        
        strokeWeight(random(1));
        stroke(color(c));
        //line(xPos,random(xPos)/100,yPos,random(yPos)/2);
        
        fill(90,100,100);
        circle(xPos,yPos,2);
fill(xPos,xPos,xPos);
        circle(xPos*random(0.1),yPos*random(0.1),2);
        
        line(xPos,100,yPos,100);

        pop();
      }
    }

}