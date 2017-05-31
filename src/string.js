document.write("New string methods");
document.write("<br>");

document.write("startwith");
document.write("<br>");
document.write('hello'.startsWith('hel'));
document.write("<br>");

document.write("endsWith");
document.write("<br>");
document.write('hello'.startsWith('llo'));
document.write("<br>");

document.write("includes");
document.write("<br>");
document.write('hello'.includes('ll'));
document.write("<br>");

document.write("repeat");
document.write("<br>");
document.write('doo '.repeat(3));
document.write("<br>");

document.write("String literal - temaplate litreral");

const first = "joe";
const last = "Doe"
document.write(`Hello ${first} ${last}`);
document.write("<br>");

const multiLine = `
This is
a string
with multiple
lines`;

document.write("print multiline");
document.write("<br>");
document.write(multiLine);
document.write("<br>");

document.write('\u{1F680}');
document.write("<br>");
const str = String.raw`Not a newline \n`;
document.write(str === 'Not a newline \\n');
document.write("<br>");


document.write("iterating over strings");
document.write("<br>");

const chars = [...'abc'];

document.write(chars);

document.write("unicode ");

for(const ch of 'x\uD83D\uDE80y'){
  document.write(ch.length);
  document.write("<br>");
}

document.write([...'x\uD83D\uDE80y'].length);
