function createPerson(fname,lname,age){
  let fullname = fname+" "+lname;
  
  return {
    fname,
    lname,
    fullname,
    isSenior() {
      return age >60;
    }
  }
}

document.write("Object Literal"+"<br>");
let p = createPerson("anjali","mp",45);
document.write(p.fname+"<br>");
document.write(p.lname+"<br>");
document.write(p.fullname+"<br>");
document.write(p.isSenior()+"<br>");


document.write("Literals can have spaces in between and variables"+"<br>");

let ln = "last name";
let person2 = {
  "first name":"abc",
	[ln]:"def"
}

document.write("print person obj "+Object.entries(person2)+"<br>");
