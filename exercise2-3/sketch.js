let x = 300;
let y = 300;
let w = 200;
let h = 300;
let rectColour = 255; 
let dragging = false;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  
  rectMode(CENTER);
  fill(rectColour);
  noStroke();
  rect(x, y, w, h);
}

function mouseDragged() {

  if (!dragging) {
    if (mouseX > x - w/2 && mouseX < x + w/2 &&
        mouseY > y - h/2 && mouseY < y + h/2) {
      dragging = true;
      rectColour = color(random(255), random(255), random(255));
    }
  }


  if (dragging) {
    x += movedX; 
    y += movedY;
  }
}

d
function mouseReleased() {
  dragging = false;
  rectColour = 255; te
}

