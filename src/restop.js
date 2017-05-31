document.write("Rest parameters");

let displayvals = function(message,...vals) {
  	document.write("<br>");
  	document.write(message+"<br>");
     document.write("no of arguments "+arguments.length+"<br>");
  for(let i in vals) {
  	document.write(vals[i]+ " ");
  }
}

let message = "List of vals";

displayvals(message,'red');
displayvals(message,'red','blue');
displayvals(message,'red','blue','green');

