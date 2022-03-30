let rectX = 100;
let rectY = 100;

let circleX = 0;
let circleY = 0;

function setup() {
  createCanvas(400, 400).parent("#p5-canvas");
  textSize(24);
}

function draw() {
  background(100);

  rect(rectX, rectY, 100, 100);
  text("banana", rectX+10, rectY+50); // an offset amount is added to the rectX and rectY positions so that the word appears inside the square

  // draws 3 circles slightly offset from each other
  for (let i=0; i<3; i++) {
    circle(circleX+(i*20), circleY, 20);
  }

  if (circleX++ >= 400 || circleY++ >= 400) {
    circleX = 0;
    circleY = 0;
  }
}

function mousePressed() {
  rectX = mouseX;
  rectY = mouseY;
}