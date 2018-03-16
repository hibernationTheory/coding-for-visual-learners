function setup() {
  createCanvas(800, 300);
  background(1, 75, 100);
}

function draw() {
  // declaration of variables
  var x = mouseX;
  var y = mouseY;
  var size = 25;

  // circle
  fill(237, 34, 93, 100);
  noStroke();
  ellipse(x, y, size, size);
}
