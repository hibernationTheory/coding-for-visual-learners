var words = ["I", "love", "programming", "with", "JavaScript"];
var colors = [
  [63, 184, 175],
  [127, 199, 175],
  [218, 216, 167],
  [255, 158, 157],
  [255, 61, 127]
];

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(3); // using a lower frame rate to slowdown the text
}

function draw() {
  var currentIndex = frameCount % words.length;
  var currentColor = colors[currentIndex];
  var currentWord = words[currentIndex];
  background(currentColor);
  fill(255);
  textSize(45);
  text(currentWord, width / 2, height / 2);
}
