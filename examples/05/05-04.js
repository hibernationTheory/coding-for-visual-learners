function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(6); // make animation slower
}

function draw() {
  background(220);
  fill(237, 34, 93);
  textSize(36);

  text("frameCount: " + frameCount, width / 2, height / 2);
}
