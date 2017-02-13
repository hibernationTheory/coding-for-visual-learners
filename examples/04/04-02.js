function setup() { 
	createCanvas(800, 300);
} 

function draw() { 
	background(220);
	var offset = 150;
	
	ellipse(100 + offset, 200, 50, 50); 
	ellipse(200 + offset, 200, 50, 50); 
	rect(50 + offset, 160, 200, 20)
}