var words = ["I", "love", "programming", "with", "JavaScript"];

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(3); // using a lower frame rate to slowdown the text
}

function draw() {
  var currentIndex = frameCount % words.length;
  background(200);
  fill(255);
  textSize(45);
  text(currentIndex, width / 2, height / 2);
}
