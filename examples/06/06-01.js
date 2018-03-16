function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);

  // declaration of variables
  var x = width / 2;
  var y = height / 2;
  var size = 200; // control the size of the shapes

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // conditionally display rectangle on mouse press
  if (mouseIsPressed === true) {
    fill(255);
    rect(x, y, size * 0.75, size * 0.15);
  }
}
