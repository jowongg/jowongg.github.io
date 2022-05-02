let bodo;
let txtArray;
let fontSize = 400;
let canvas;

function preload()
{
  bodo = loadFont("bodo.otf");
}

function setup() {
  canvas = createCanvas(400, 400);
  pixelDensity(1);
  frameRate(5);
  mMask = createGraphics(128, 128);
textFont(bodo);
  textSize(fontSize);
  //stroke(12, 2, 194);
  

}

function draw() {
  
  background(266);
  
  
  txtArray = bodo.textToPoints("B", 70, 330, fontSize, {sampleFactor: 0.9});
  loadPixels();
//   for(var y=0; y<height;y++)
//     {
//       for(var x=0;x<width;x++)
//         {
//           var index = (x+y*width)*4;
//           pixels[index] = x;
//           pixels[index+1] = 0;
//           pixels[index+2] = y;
//           pixels[index+3] = x+100;
            
//         }
//     }
  
  updatePixels();
  // for(i=0;i< txtArray.length; i++){
  //   rect(txtArray[i].x +10, txtArray[i].y+10, 30,30);
  //   stroke(40+i*(random(20)));
  //   fill(100, 10, 100);
  // }
  // for(var y=0; y<height;y++)
  //   {
  //     for(var x=0;x<width;x++)
  //       {
  //         rect(x, y, 20,20);
  //         stroke(244);
  //         fill(100, 10, 220);  
  //       }
  //   }
  
   for(i=0;i< txtArray.length; i++){
     fill(i/3);
     stroke(201+random(i)/10);
     rect(txtArray[i].x+random(mouseX)-150, txtArray[i].y-70, 150,150);
//     ellipse(txtArray[i].x, txtArray[i].y, 20,20);  
//     stroke(250);
//     ellipse(txtArray[i].x, txtArray[i].y, 15,25); 
//     stroke(255);
//     ellipse(txtArray[i].x, txtArray[i].y, 13,25); 
     
  }
    for(i=0;i< txtArray.length; i++){
     fill(220, 10, i/4);
     stroke(221+random(i)/10);
     rect(txtArray[i].x+random(50), txtArray[i].y, 20,20);
     
  }
  
  //canvas.mask(mMask);
  //blendMode(SCREEN);
  fill(255);
  //text("B", 70, 330);
  

}