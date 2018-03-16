function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(220);

  ellipse(100, 200, 50, 50); // left wheel
  ellipse(200, 200, 50, 50); // right wheel
  rect(50, 160, 200, 20); // cart
}
