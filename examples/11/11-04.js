var pressed;
var colors = [];

function setup() {
  createCanvas(800, 300);
  background(0);
  colors = [
    [245, 3, 155],
    [13, 159, 215],
    [148, 177, 191],
    [100, 189, 167],
    [242, 226, 133],
    [176, 230, 110],
    [123, 90, 240]
  ];
}

function draw() {
  noStroke();
  if (pressed === true) {
    var randomIndex = parseInt(random(colors.length), 10);
    var randomSize = random(200);

    fill(colors[randomIndex]);
    ellipse(random(width), random(height), randomSize, randomSize);
  }
  pressed = false;
}

function keyPressed() {
  pressed = true;
}
