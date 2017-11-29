var snow = [];

var value = 0;



function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	value += -1;
	print(value);
    console.log(value);

	background(19,103,109);

	if (value > 2) {
		var newSnowflakes = {
			xpos: random(windowWidth/3-40,windowHeight/3+40),
			ypos: 250,
			size: 10,
			snowColor: random(100, 255)
		};
		snow.push(newSnowflakes);
	} 

	for (i = 0; i < snow.length; i++) {
		var currentObj = snow[i];
		snowflakes(currentObj.xpos, currentObj.ypos, currentObj.size, currentObj.snowColor);
		currentObj.ypos += random(2, 5);
	}

	
    
   //clouds design
    
    noStroke();    
    //right    
    fill(255);
    ellipse (windowWidth/2+80,215, 100,100);
    
    //center    
    fill(255);
    ellipse (windowWidth/2,190, 150,150);
    
    
    //left
    fill(255);
    ellipse (windowWidth/2-70,220, 80,80);
    ellipse (windowWidth/2-120,230, 50, 50);
    
    
    text("Let it snow..", windowWidth/4, 70);
    fill(255);
    textFont('Fredoka One',[30])
}

//snow design
function snowflakes(xpos, ypos, size, snowColor) {
	noStroke();
	fill(255, 255, 255, snowColor);
	ellipse(xpos, ypos, size, size);
}



function deviceShaken() {
    value = 0;
    value+=10;
 
}
