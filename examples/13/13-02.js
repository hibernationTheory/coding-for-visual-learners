var guessItem;

function setup() { 
 createCanvas(800, 300);
} 

function draw() { 
	if (frameCount === 1 || frameCount % 100 === 0) {
		background(220);
		guessItem = new GuessItem(width/2, height/2, 1);
	}
	
	guessItem.render();
}

function GuessItem(x, y, scl) {
	this.x = x;
	this.y = y;
	this.scale = scl;
	this.content = getContent();
 
	function getContent() {
		return parseInt(random(10), 10);
	}
	
	this.render = function () {
		push();
		textAlign(CENTER, CENTER);
		translate(this.x, this.y);
		scale(this.scale);
		text(this.content, 0, 0);
		pop();
	}
}