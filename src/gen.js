document.write("ES6 generator");
document.write("<br>");

function *createGenerator(){
  yield 1;
  document.write("After 1st yield");
  yield 2;
}


document.write("invoke the generator by next method");

let gen = createGenerator();

document.write("pausing and resuming with yield");
document.write(gen.next());
document.write("<br>");
document.write(gen.next());
document.write("<br>");
document.write(gen.next());
