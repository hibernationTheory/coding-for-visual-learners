var count = 0; // initialize a counter variable

function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);

  // declaration of variables
  var x = width / 2;
  var y = height / 2;
  var size = 200 + count; // control the size of the shapes

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // rectangle
  fill(255);
  rect(x, y, size * 0.75, size * 0.15);

  count = count + 1; // increment the counter variable
}
