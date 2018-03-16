function setup() { 
    createCanvas(800, 300);
} 

function draw() {
	background(1, 75, 100);

	// circle properties
	fill(237, 34, 93);
	noStroke();
	var diameter = 50;
	
	for (var i=0; i<width/diameter; i=i+1) { 
		for (var j=0; j<height/diameter; j=j+1) {
			ellipse(
				diameter/2 + i * diameter, 
				diameter/2 + j * diameter, 
				diameter * random() // using the random function, 
				diameter
			);
		}
	}
}