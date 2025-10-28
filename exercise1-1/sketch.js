let circleX = 20;
let circleY = 20;
let circleW = 40;
let g, b;

function setup() {
  frameRate(10);
  createCanvas(600, 400);
  noStroke();
  background(0);
  g = random(10, 255);
  b = random(255);
}

function draw() {
    fill(g,b);
  circle(circleX, circleY, circleW);
circleX += circleW;

if (circleX > width - circleW / 2) {
  circleX = circleW / 2;
  circleY += circleW;
  }

  b = (b + 5) % 255;
}
