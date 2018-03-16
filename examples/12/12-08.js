function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // translation and rotation will be contained in between
  // push and pop function calls.
  push();
  translate(width / 2, height / 2);
  rotate(45);
  // pink rectangle
  fill(237, 34, 93);
  rect(0, 0, 150, 150);
  pop();

  // white rectangle
  fill(255, 255, 255);
  rect(0, 0, 75, 75);
}
