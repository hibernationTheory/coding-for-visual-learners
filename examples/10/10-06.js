var sizes = [200, 150, 100, 50, 25];

function setup() {
  createCanvas(800, 300);
}

function draw() {
  // circle properties
  fill(237, 34, 93);
  strokeWeight(2);

  ellipse(width / 2, height / 2, sizes[0], sizes[0]);
  ellipse(width / 2, height / 2, sizes[1], sizes[1]);
  ellipse(width / 2, height / 2, sizes[2], sizes[2]);
  ellipse(width / 2, height / 2, sizes[3], sizes[3]);
  ellipse(width / 2, height / 2, sizes[4], sizes[4]);
}
