var circle;

function setup() {
  createCanvas(800, 300);
  // instantiating a new circle using the Circle constructor function
  circle = new Circle();
}

function draw() {
  background(220);

  // circle properties
  fill(237, 34, 93);
  noStroke();

  circle.draw();
  circle.grow();
}

var Circle = function() {
  this.x = width / 2;
  this.y = height / 2;
  this.size = 50;
  this.draw = function() {
    ellipse(this.x, this.y, this.size, this.size);
  };
  this.grow = function() {
    if (this.size < 200) {
      this.size += 1;
    }
  };
};
