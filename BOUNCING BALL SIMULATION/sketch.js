let x = (800 / 2);
let y = 10;
let size = 20;
let gravity = 1;
let time = 0;
let distance = 0;
let mass = 0.1;


var density=mass/size;

function again(){
	document.getElementsByClassName('again').setup();

}

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

//formula for drag
		 function drag(){
		 		drag=(density)*96.04*4*3.14*(x,y)*(x,y);
		}
}




//For controles
function massvalue() {
	var valu1 = document.getElementById('mass_value').value;
	mass = valu1;
}

function gravityvalue() {
	var valu2 = document.getElementById('gravity_value').value;
	gravity = valu2;
}

function sizevalue() {
	var valu3 = document.getElementById('size_value').value;
	size = valu3;
}
