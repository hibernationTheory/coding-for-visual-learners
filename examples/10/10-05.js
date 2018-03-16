var size1 = 200;
var size2 = 150;
var size3 = 100;
var size4 = 50;
var size5 = 25;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  // circle properties
  fill(237, 34, 93);
  strokeWeight(2);

  ellipse(width / 2, height / 2, size1, size1);
  ellipse(width / 2, height / 2, size2, size2);
  ellipse(width / 2, height / 2, size3, size3);
  ellipse(width / 2, height / 2, size4, size4);
  ellipse(width / 2, height / 2, size5, size5);
}
