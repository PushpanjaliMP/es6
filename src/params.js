document.write("default params");
document.write("<br>");

let getValue = function(val1=10,val2=20){
  document.write("<br>");
  document.write("sum of 2 variables ");
  document.write(val1+val2);
  document.write("<br>");
  document.write("no of arguments "+arguments.length);
  document.write("<br>");
  //document.write(val2);
  //document.write("<br>");
};

document.write("fuction call without params");
getValue();
document.write("<br>");
document.write("fuction call with first param");
getValue(30);
document.write("<br>");
document.write("fuction call with both params");
getValue(30,40);
document.write("<br>");
document.write("fuction call with 2nd  param");
getValue(undefined,50);
document.write("<br>");

document.write("function with default functions");
document.write("<br>");


let percentBonus = () => 0.1;
let getdeffunc = function(val=10,bonus=val*percentBonus()){
  document.write(val+bonus);
};

document.write("no params ");
getdeffunc();
document.write("<br>");

document.write("1 param ");
getdeffunc(20);
document.write("<br>");

document.write("both params ");
getdeffunc(20,30);
document.write("<br>");
