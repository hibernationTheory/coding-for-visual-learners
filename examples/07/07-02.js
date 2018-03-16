function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1, 75, 100);

  // circle properties
  fill(237, 34, 93);
  noStroke();

  for (var i = 0; i < 10; i = i + 1) {
    ellipse(0, 0, 50, 50);
  }
}
