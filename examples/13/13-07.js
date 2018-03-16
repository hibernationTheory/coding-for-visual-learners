var guessItem = null;
// controls the frequency that a new random number is generated.
var interval = 100;
// an array to store solution values
var results = [];
var solution = null;

function setup() {
  createCanvas(800, 300);
}

function draw() {
  // if there are 3 losses or 10 attempts stop the game.
  var gameScore = getGameScore(results);
  if (gameScore.loss === 3 || gameScore.total === 10) {
    return;
  }
  background(220);
  if (frameCount === 1 || frameCount % interval === 0) {
    solution = null;
    guessItem = new GuessItem(width / 2, height / 2, 1);
  }

  if (guessItem) {
    guessItem.render();
  }

  if (solution === true) {
    background(255);
  } else if (solution === false) {
    background(0);
  }
}

function getGameScore(score) {
  // given a score array, calculate the number of wins and losses.
  var wins = 0;
  var losses = 0;
  var total = score.length;

  for (var i = 0; i < total; i++) {
    var item = score[i];
    if (item === true) {
      wins = wins + 1;
    } else {
      losses = losses + 1;
    }
  }

  return { win: wins, loss: losses, total: total };
}

function keyPressed() {
  if (guessItem !== null) {
    // check to see if the pressed key matches to the displayed number.
    // if so set the solution global variable to a corresponding value.
    console.log("you pressed: ", key);
    solution = guessItem.solve(key);
    console.log(solution);
    if (solution) {
      results.push(true);
    } else {
      results.push(false);
    }
    guessItem = null;
  } else {
    console.log("nothing to be solved");
  }
}

function GuessItem(x, y, scl) {
  this.x = x;
  this.y = y;
  this.scale = scl;
  this.scaleIncrement = 0.5;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 3;
  this.solved = null;

  function getContent() {
    // generate a random integer in between 0 and 9
    return String(parseInt(random(10), 10));
  }

  this.solve = function(input) {
    // check to see if the given input is equivalent to the content.
    // set solved to the corresponding value.
    var solved;
    if (input === this.content) {
      solved = true;
    } else {
      solved = false;
    }
    this.solved = solved;
    return solved;
  };

  this.render = function() {
    push();
    if (this.solved === false) {
      return;
    }
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
