var pos;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pos = createVector(width / 2, height / 2);
}

function draw() {
	// background(130, 200, 250);
	background(255);
	translate(pos.x, pos.y);

	// big circle
	fill(250, 50, 50);
	stroke(0);
	strokeWeight(10);
	ellipse(0, 0, 550, 550);

	// middle circle
	fill(250, 50, 50);
	stroke(0, 100);
	strokeWeight(5);
	ellipse(0, 0, 300, 300);

	push();
	rotate(-frameCount / 30);

	// spining circle
	fill(0);
	noStroke();
	ellipse(0, 0 + 140, 100, 100);
	ellipse(0 - 140, 0 - 50, 100, 100);
	ellipse(0 + 130, 0 - 70, 100, 100);

	// center circle
	fill(0);
	ellipse(0, 0, 50, 50);
}
