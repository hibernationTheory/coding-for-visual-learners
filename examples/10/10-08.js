var sizes = [200, 150, 100, 50, 25];

function setup() {
  createCanvas(800, 300);
}

function draw() {
  // circle properties
  fill(237, 34, 93);
  strokeWeight(2);

  for (var i = 0; i < 5; i++) {
    ellipse(width / 2, height / 2, sizes[i], sizes[i]);
  }
}
