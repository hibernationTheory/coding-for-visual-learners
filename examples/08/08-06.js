function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(1, 75, 100);
  var x = squared(10);
  console.log(x);
}

function squared(num) {
  fill(237, 34, 93);
  textSize(60);
  textAlign(CENTER, CENTER);
  var result = num * num;
  text(result, width / 2, height / 2);
  return result;
}
