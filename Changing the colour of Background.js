
var r = 0;
var g = 50;
var b = 255;



function setup(){
 createCanvas(1200,400);


}


function draw(){
   background(220)
   
if(mouseX >0 && mouseX <500){
  background("red");
 } else{
   background(220);
 }

if(mouseX <500 && mouseX >250){
  background("black");
}else{
  background("red");
}

if(mouseY >0 && mouseY <200){
  background(50);
}

if(mouseY <220 && mouseY >400){
  background(2);
}

ellipse (mouseX,mouseY,25,25);


  //change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}