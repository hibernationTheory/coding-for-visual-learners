function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1, 75, 100);
  squared(10);
}

function squared(num) {
  fill(237, 34, 93);
  textSize(60);
  textAlign(CENTER, CENTER);
  text(num * num, width / 2, height / 2);
}
