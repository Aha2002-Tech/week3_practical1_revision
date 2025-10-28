let fillColour;
let x = 300;
let y = 300;

function setup() {
  createCanvas(600, 600);
  noStroke();

  fillColour = color(random(255), random(255), random(255));
}

function draw() {
  background(255);

  rectMode(CENTER);
  fill(fillColour);
  rect(x, y, 500, 500); 
}
function mouseReleased() {
  fillColour = color(random(255), random(255), random(255));
}