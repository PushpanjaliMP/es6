
document.write("Destructuring Array"+"<br>");

let emp = ["anjali","mithra","anjana"];

let [name1,name2,name3="aksa"] = emp;

document.write("name1 "+name1+"<br>");
document.write("name2 "+name2+"<br>");
document.write("name3 "+name3+"<br>");

let emp1 = ['abc','def','ghi'];

let [,,lname] =emp1
document.write("lname"+lname+"<br>");

document.write("using rest operator"+"<br>");
let [fname,...elements] = emp;

document.write("fname"+fname+"<br>");
document.write("elemtsnts "+elements+"<br>");

document.write("Destructuring Objects"+"<br>");

let empobj = {
  fname:"anjali",
  lname:"mp",
  gender:"female"
}

let {fname:f,lname:l,gender:g} = empobj;

document.write("fname "+f+"<br>");
document.write("lname "+l+"<br>");
document.write("gender "+g+"<br>");


