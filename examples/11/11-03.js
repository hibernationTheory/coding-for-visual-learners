var pressed;

function setup() {
  createCanvas(800, 300);
  background(220);
}

function draw() {
  if (pressed === true) {
    ellipse(random(width), random(height), 50, 50);
  }
  pressed = false;
}

function keyPressed() {
  pressed = true;
}
