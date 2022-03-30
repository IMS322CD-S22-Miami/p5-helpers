function setup() {
  createCanvas(windowWidth/2, windowHeight/2).parent("#p5-canvas");
}

function draw() {
  background(100);
 
  // shadow circle that will trail the mouse at the previous location
  fill(355, 0, 0);
  circle(pmouseX, pmouseY, width/4);

  // the canvas width variable is used to set the size of the circle so that it changes with the canvas width
  fill(255);
  circle(mouseX, mouseY, width/4);

  // you can do the same with an item's location
  textSize(width/20);
  text("I am here", width/10, height/4);

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}