var num;

function setup() {
  num = 3;
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  var value;
  background(220);
  fill(237, 34, 93);

  textSize(48);
  if (num === 1) {
    value = "TRUE";
  } else if (num === 2) {
    value = "TRUE 2";
  } else if (num === 3) {
    value = "TRUE 3";
  } else {
    value = "FALSE";
  }
  text(value, width / 2, height / 2);
}
