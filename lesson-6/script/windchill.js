

/******
 
 function output(){
	var tempF = parseFloat(document.getElementById('high').value)
	var speed = parseFloat(document.getElementById('speed').value);

	var output = windchill(tempF, speed);

	document.getElementById('windchill').innerHTML = output.toFixed(2); 
;
	}


function windchill(tempF, speed) {
			if(t <= 50 && s>=3){
let t = tempF;
let s = speed;
    let f =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));    

	return f;
			}
}


***********/	
	
function output(){
	var tempF = parseFloat(document.getElementById('high').value)
	var speed = parseFloat(document.getElementById('speed').value);

	var output = windchill(tempF, speed);

	document.getElementById('windchill').innerHTML = output.toFixed(2);
	}


function windchill(tempF, speed) {
			if(t <= 50 && s>=3){
let t = tempF;
let s = speed;
    let f =  35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));    

	return f;
			}
}