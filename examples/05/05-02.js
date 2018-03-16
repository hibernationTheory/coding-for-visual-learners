function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(237, 34, 93);
  textSize(36);

  // get the current frame rate as an integer.
  var fps = parseInt(frameRate(), 10);
  text("frameRate: " + fps, width / 2, height / 2);
}
