var guessItem = null;
var interval = 100;
var results = [];
var solution = null;
var gameOver = false;

function setup() {
	createCanvas(800, 300);
}

function draw() {
	var gameScore = getGameScore(results);
	if (gameScore.loss === 3 || gameScore.total === 10) {
		gameOver = true;
		displayGameOver(gameScore);
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

function displayGameOver(score) {
	push();
	background(255);
	textSize(24);
	textAlign(CENTER, CENTER);
	translate(width / 2, height / 2);
	fill(237, 34, 93);
	text('GAME OVER!', 0, 0);
	translate(0, 36);
	fill(0);
	text('You have ' + score.win + ' correct guesses', 0, 0);
	translate(0, 100);
	textSize(16);
	var alternatingValue = map(sin(frameCount / 10), -1, 1, 0, 255);
	fill(237, 34, 93, alternatingValue);
	text('PRESS ENTER', 0, 0);
	pop();
}

function getGameScore(score) {
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

	return {
		win: wins,
		loss: losses,
		total: total
	};
}

function restartTheGame() {
	results = [];
	solution = null;
	gameOver = false;
}

function keyPressed() {
	if (gameOver === true) {
		if (keyCode === ENTER) {
			console.log('restart the game');
			restartTheGame();
			return;
		}
	}

	if (guessItem !== null) {
		console.log('you pressed: ', key);
		solution = guessItem.solve(key);
		console.log(solution);
		if (solution) {
			results.push(true);
		} else {
			results.push(false);
		}
		guessItem = null;
	} else {
		console.log('nothing to be solved');
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
	this.solved;

	function getContent() {
		return String(parseInt(random(10), 10));
	}

	this.solve = function(input) {
		var solved;
		if (input === this.content) {
			solved = true;
		} else {
			solved = false;
		}
		this.solved = solved;
		return solved;
	}

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
		this.scale = this.scale + this.scaleIncrement;
		this.alpha = this.alpha - this.alphaDecrement;
		pop();
	}
}