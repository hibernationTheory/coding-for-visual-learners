function setup() { 
	createCanvas(800, 300);
	rectMode(CENTER);
	noStroke();
	angleMode(DEGREES);
} 

function draw() { 
	background(220);
	fill(237, 34, 93);
	translate(150, 0);
	rotate(5);
	rect(width/2, height/2, 50, 50);
	rect(width/2+50, height/2+50, 50, 50);
}