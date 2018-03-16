function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);

  // circle 01
  fill(51, 51, 51);
  strokeWeight(2);
  stroke(75);
  ellipse(400, 200, 300, 300);

  // circle 02
  stroke(0);
  fill(255, 53, 139);
  ellipse(400, 200, 275, 275);

  // circle 03
  fill(1, 176, 240);
  ellipse(400, 200, 250, 250);

  // circle 04
  fill(174, 238, 0);
  ellipse(400, 200, 150, 150);
}
