var content;

function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  if (frameCount === 1 || frameCount % 100 === 0) {
    content = parseInt(random(10), 10);
  }

  text(content, width / 2, height / 2);
}
