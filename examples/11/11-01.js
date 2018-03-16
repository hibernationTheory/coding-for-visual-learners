var toggle = true;

function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}

function draw() {
  // display a different bg color based on the toggle value
  if (toggle === true) {
    background(1, 186, 240);
  } else {
    background(250, 150, 50);
  }

  // declaration of variables
  var x = width / 2;
  var y = height / 2;
  var size = 200;

  if (frameCount < 60) {
    size = size + frameCount;
  } else {
    size = size + 60;
  }

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  // rectangle
  fill(255);
  rect(x, y, size * 0.75, size * 0.15);
}

function mousePressed() {
  toggle = !toggle; // change the toggle value to be opposite.
}
