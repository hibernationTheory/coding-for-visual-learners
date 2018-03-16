var circle;

function setup() {
  createCanvas(800, 300);

  circle = {
    x: width / 2,
    y: height / 2,
    size: 50,
    draw: function() {
      ellipse(this.x, this.y, this.size, this.size);
    },
    grow: function() {
      if (this.size < 200) {
        this.size += 1;
      }
    }
  };
}

function draw() {
  background(220);

  // circle properties
  fill(237, 34, 93);
  noStroke();

  circle.draw();
  circle.grow();
}
