document.write("normal function call")
var getvalue = function() {
  return 10;
}
document.write(getvalue());
document.write("<br>");
document.write("Arrow functon call");
const getarrowvalue = () => 10;
document.write(getarrowvalue());

document.write("Lexical this");
document.write("<br>");

var employee = {
  id:1,
  greet: function() {
    setTimeout(() =>{
      document.write(this.id);
    },1000);
  }
};

employee.greet();

Document.write("<br>");

