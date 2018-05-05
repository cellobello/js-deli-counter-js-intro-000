var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  var index = katzDeli.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${index} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var serving = katzDeli.shift();
    return `Currently serving ${serving}.`;
}
}

function currentLine(katzDeli) {
  if(katzDeli.length === 0) {
    return "The line is currently empty.";
  }
  else {
    for (var i = 1; i < katzDeli.length; i++) {
  		console.log( i + ". " + katzDeli[i] + ", " );
		}
	}
  }
}

function practiceLoop1(katzDeli) {
	lineString =["The line is currently: "]
	for (var i = 0; i < (katzDeli.length -1); i++) {
  		lineString.push( (i + 1) + ". " + katzDeli[i] + ", " );
		}
	
	var currentLine = (lineString[0] + lineString[1] + lineString[2]);
	return currentLine
	}