function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  frameRate(1);
}

function draw() {
  var random_0 = random();
  var random_1 = random(10);
  var random_2 = random(100, 1000);
  var offset = 40;

  textSize(24);
  background(255);
  text(random_0, width / 2, height / 2 - offset);
  text(random_1, width / 2, height / 2 - 0);
  text(random_2, width / 2, height / 2 + offset);
}
