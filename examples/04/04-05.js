var canvasWidth = 800;
var canvasHeight = 300;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	rectMode(CENTER);
}

function draw() {
	background(1, 186, 240);
	fill(237, 34, 93);
	noStroke();

	var x = canvasWidth / 2;
	var y = canvasHeight / 2;

	ellipse(x, y, 200, 200);
	fill(255);
	rect(x, y, 150, 30);
}