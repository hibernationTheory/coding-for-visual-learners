function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(237, 34, 93);

  // rotating the shape around it's origin
  translate(width / 2, height / 2);
  rotate(45);
  rect(0, 0, 100, 100);
}
