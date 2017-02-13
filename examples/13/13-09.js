var guessItem = null;
var interval = 60;
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
	background(0);
	if (frameCount === 1 || frameCount % interval === 0) {
		solution = null;
		guessItem = new GuessItem(width/2, height/2, 1);
	}
	
	if (guessItem) {
		guessItem.render();
	}
	
	if (solution === true) {
		solutionTrueMessage(gameScore.total);
	}
}

function solutionTrueMessage(seed) {
		var messages = [
			'GOOD JOB!',
			'DOING GREAT!',
			'OMG!',
			'SUCH WIN!',
			'I APPRECIATE YOU',
			'IMPRESSIVE'
		];
	
		push();
		textAlign(CENTER, CENTER);
		background(255);
		fill(237, 34, 93);
		textSize(36);
		randomSeed(seed * 10000);
		text(messages[parseInt(random(messages.length), 10)], width/2, height/2);
		pop();
}

function displayGameOver(score) {
	push();
	background(255);
	textSize(24);
	textAlign(CENTER, CENTER);
	translate(width/2, height/2);
	fill(237, 34, 93);
	text('GAME OVER!', 0, 0);
	translate(0, 36);
	fill(0);
	text('You have ' + score.win + ' correct guesses', 0, 0);
	translate(0, 100);
	textSize(16);
	var alternatingValue = map(sin(frameCount/10), -1, 1, 0, 255);
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
			wins = wins+1;
		} else {
			losses = losses+1;
		}
	}
	
	return {win: wins, loss: losses, total: total};
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
	this.scaleIncrement = 0.25;
	this.clr = 255;
	this.content = getContent();
	this.alpha = 255;
	this.alphaDecrement = 6;
	this.solved;
	this.contentMap = {
		'1': 'one',
		'2': 'two',
		'3': 'three',
		'4': 'four',
		'5': 'five',
		'6': 'six',
		'7': 'seven',
		'8': 'eight',
		'9': 'nine',
		'0': 'zero'
	};
	this.colors = [
		[63, 184, 175],
		[127, 199, 175],
		[218, 216, 167],
		[255, 158, 157],
		[255, 61, 127],
		[55, 191, 211],
		[159, 223, 82],
		[234, 209, 43],
		[250, 69, 8],
		[194, 13, 0]
	];
	
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
	
	this.drawEllipse = function(size, strkWeight, speedMultiplier, seed) {
		push();
		randomSeed(seed);
		translate(this.x, this.y);
		var ellipseSize = this.scale * speedMultiplier;
		scale(ellipseSize);
		var clr = this.colors[parseInt(random(this.colors.length), 10)]
		stroke(clr);
		noFill();
		strokeWeight(strkWeight);
		ellipse(0, 0, size, size);
		pop();
	}
	
	this.render = function () {	
		push();
		this.drawEllipse(100, 15, 2, 1*this.content*1000);
		this.drawEllipse(60,7, 2, 1*this.content*2000);
		this.drawEllipse(35, 3, 1.2, 1*this.content*3000);
		pop();
		
		push();
		fill(this.clr, this.alpha);
		textAlign(CENTER, CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		text(this.contentMap[this.content], 0, 0);
		this.scale = this.scale + this.scaleIncrement;
		this.alpha = this.alpha - this.alphaDecrement;
		pop();
	}
}