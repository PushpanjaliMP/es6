document.write("Spread parameters(splits array) - inverse of rest(combines array)");

let displayvals = function(message,...vals) {
  	document.write("<br>");
  	document.write(message+"<br>");
     document.write("no of arguments "+arguments.length+"<br>");
  for(let i in vals) {
  	document.write(vals[i]+ " ");
  }
}

let message = "List of vals";

var valArray = ['red','blue','green'];

//splits in function call
displayvals(message,...valArray);