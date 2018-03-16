function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(220);
  fill(237, 34, 93);
  rect(width / 2, height / 2, 50, 50);
  rect(width / 2 + 50, height / 2 + 50, 50, 50);
}
