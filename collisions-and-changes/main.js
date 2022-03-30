let can;
let cSize = 20;

function preload() {
  can = loadImage("wateringcan.jpg");
}

function setup() {
  createCanvas(400, 400).parent("#p5-canvas");
}

function draw() {
  background(100);

  circle(width/2, height/2, cSize);
  image(can, mouseX, mouseY, 50, 50);

  let hit = collideRectCircle(mouseX, mouseY, 50, 50, width/2, height/2, cSize);

  if (hit) {
    stroke("red");
    cSize++;
  } else stroke("black")

}