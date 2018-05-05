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
    for (i = 0, i > katzDeli.length(), i++) {
      console.log(i + ". " + katzDeli[i - 1] + ", ");
    }
  }
}