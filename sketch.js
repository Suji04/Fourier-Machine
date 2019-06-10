var time = 0;
var wave = [];

function setup() {
createCanvas(windowWidth,400);
}

function draw() {
	background(0);
  	translate(120,200);
  	noFill();
  	var x=80, y=0;
  	for (var i = 0; i < 10; i++) {
  		stroke(255, 144, 48);
  		var px=x;
  		var py=y;
  		var n=0;
  		
  		//square wave
  		n=2*i+1;
  		var radius = 300/(n*PI);
  		x += radius*cos(n*time);
	  	y += radius*sin(n*time);
	  	
  		// triangular wave
  		// n=2*i+1;
  		// var radius = 100*pow(-1,i)*pow(n,-2);
  		// x += radius*cos(n*time);
	  	// y += radius*sin(n*time);

	  	// saw-tooth wave
	  	// n=i+1;
	  	// var radius = 200/(PI*(n));
	  	// x += radius*cos((n)*time);
	  	// y += radius*sin((n)*time);

	  	// |sin x| wave
	  	// n=i+1;
	  	// var radius = 600/((4*n*n-1)*PI);
  		// x += radius*sin(2*n*time);
	  	// y += radius*cos(2*n*time);
  	
	  	line(px,py,x,y);
	  	noFill();
	  	ellipse(px,py,radius*2);
	  	fill(240,10,10);
	  	noStroke();
  	}
    
  	wave.unshift(y);
  	stroke(135, 199, 237);

  	line(x,y,250,wave[0]);
  	noFill();
  	stroke(237, 198, 56);

  	beginShape();
  	for (var i = 0; i < wave.length; i++) {
  		vertex(250+i,wave[i]);
  	}
  	endShape();

  	time+=.02;
  	if (wave.length > 1000) {
    	wave.pop();
  	}
}