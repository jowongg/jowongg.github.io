function setup(){
    createCanvas(550,550);
    background(color("#5edaff"));

    
    /*ellipse(125, 125, 80, 80); // x, y, width, height
    ellipse(230, 230, 80, 80); // x, y, width, height
    ellipse(45, 45, 80, 80); // x, y, width, height*/
}

var plus =10;
var size = 80;
function draw() {
    var realtimesize;
    fill(color("#5edaff"));
    stroke(color("#ffffff"));
    strokeWeight(2);
    if(mouseIsPressed)
    {
        ellipse(mouseX, mouseY, size+plus, size+plus); 
        plus= plus -2;
        //realtimesize = size+plus;
        console.log(plus);
        
    }
    //reset
        if(realtimesize < 0)
        {
            plus = 10;
            console.log("reset");
        }
}

    