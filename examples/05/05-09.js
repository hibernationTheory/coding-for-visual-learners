var size;

function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
  size = 200;
}

function draw() {
  background(1, 186, 240);

  // declaration of variables
  var x = width / 2;
  var y = height / 2;
  var size = 200;
  if (frameCount < 30) {
    size = size + frameCount;
  } else {
    size = size + 30;
  }

  // ellipse
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // rectangle
  fill(255);
  rect(x, y, size * 0.75, size * 0.15);
}
