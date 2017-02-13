function setup() { 
	createCanvas(800, 300);
	rectMode(CENTER);
	noStroke();
	angleMode(DEGREES);
} 

function draw() { 
	background(220);
	
	fill(237, 34, 93);
	rectC(width/2, height/2, 150, 150, 45);

	fill(255, 255, 255);
	rectC(width/2, height/2, 75, 75, 30);
}

function rectC(x, y, width, height, rotation) {
	if (rotation === undefined) {
		rotation = 0;
	}
	push();
	translate(x, y);
	rotate(rotation);
	rect(0, 0, width, height);
	pop();
}