var num;

function setup() {
  num = 1;
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  fill(237, 34, 93);
  textSize(48);

  if (num === 1) {
    // this code gets executed only if num is equivalent to 1.
    text("TRUE", width / 2, height / 2);
  }
}
