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

function keyPressed() {
  
  if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
    y -= 5;
  }
  
  else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
    y += 5;
  }
  else if (keyCode === LEFT_ARROW || key === 'a' || key === 'A') {
    x -= 5;
  }
 
  else if (keyCode === RIGHT_ARROW || key === 'd' || key === 'D') {
    x += 5;
  }
  fillColour = color(random(255), random(255), random(255));
  return false;
}


