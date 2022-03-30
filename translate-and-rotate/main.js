let translateX = 0;
let translateY = 0;

let rotating = false;
let degree = 0;

function setup() {
  createCanvas(400, 400).parent("#p5-canvas");
  textSize(16);
}

function draw() {
  background(100);
  translate(translateX, translateY);

  if (rotating) {
    rotate(degree++/100);
  }

  line(-400, 0, 400, 0);
  line(0, -400, 0, 400);
  
  fill("red");
  circle(0, 0, 10);
  text("0,0 is here", 10, 20);
  
  rect(100, 100, 50, 50);

  if(translateX++ >= 400 || translateY++ >= 400) {
    translateX = 0;
    translateY = 0;
    rotating = !rotating;
  }

}