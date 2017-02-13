function setup() {
	createCanvas(800, 300);
	rectMode(CENTER);
}

function draw() {
	background(1, 186, 240);
	fill(237, 34, 93);
	noStroke();
	
	var x = 400;
	var y = 150;
	
	ellipse(x, y, 200, 200);
	fill(255);
	rect(x, y, 150, 30);
}