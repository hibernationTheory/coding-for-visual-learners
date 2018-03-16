var colors;

function setup() {
  createCanvas(800, 300);

  colors = {
    black: 0,
    darkGray: 55,
    gray: 125,
    lightGray: 175,
    white: 255,
    paintItBlack: function() {
      background(this.black);
    }
  };
}

function draw() {
  background(220);

  // calling the paintItBlack method after frame 120.
  if (frameCount > 120) {
    colors.paintItBlack();
  }
}
