var guessItem;
// controls the frequency that a new random number is generated.
var interval = 100;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  background(220);
  if (frameCount === 1 || frameCount % interval === 0) {
    guessItem = new GuessItem(width / 2, height / 2, 1);
  }

  guessItem.render();
}

function GuessItem(x, y, scl) {
  this.x = x;
  this.y = y;
  this.scale = scl;
  this.scaleIncrement = 0.5;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 3;

  function getContent() {
    // generate a random integer in between 0 and 9
    return parseInt(random(10), 10);
  }

  this.render = function() {
    push();
    fill(0, this.alpha);
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    text(this.content, 0, 0);
    // increase the scale value by the increment value with each render
    this.scale = this.scale + this.scaleIncrement;
    // decrease the alpha value by the decrement value with each render
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  };
}
