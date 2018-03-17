function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);

  // declaration of variables
  var x = width / 2;
  var y = height / 2;
  // increment the size with the current frameCount value
  var size = 200;
  var limit = 30;
  if (frameCount < limit) {
    size = size + frameCount;
  } else {
    size = size + limit;
  }

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // rectangle
  fill(255);
  rect(x, y, size * 0.75, size * 0.15);
}
