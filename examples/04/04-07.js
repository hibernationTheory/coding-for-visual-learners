// declaration of global variables
var canvasWidth = 800;
var canvasHeight = 300;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  background(1, 186, 240);

  // declaration of variables
  var x = canvasWidth / 2;
  var y = canvasHeight / 2;

  // circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, 200, 200);

  // rectangle
  fill(255);
  rect(x, y, 150, 30);
}
