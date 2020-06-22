let x = (800 / 2);
let y = 10;
let size = 20;
let gravity = 1;
let time = 0;
let distance = 0;
let mass = 0.1;

function setup() {
	createCanvas(800,  500);
}

function draw() {
	background(240);

		//Physics applied
		weight = gravity * mass;
	    time++;
	    distance = weight * time;
	    y += distance;
	    if (y > (height - (size / 2))){
		    time = time * -1;
		    distance = weight * time;
		    time -= distance;
		    y += distance;

		}

		//Drawing BALL
		stroke(255, 0, 0, (255 / 1.5));
		fill(255, 0, 0, (255 / 1.5));
		ellipse(x, y, size, size);
}

//For controles
function mass1() {
	var valu1 = document.getElementById('val1').value;
	mass = valu1;
}

function gravity1() {
	var valu2 = document.getElementById('val2').value;
	gravity = valu2;
}

function size1() {
	var valu3 = document.getElementById('val3').value;
	size = valu3;
}
