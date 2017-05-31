class Person {
  greet() {}
}

//classes are not hoisted
let p = new Person();

document.write("type of class "+typeof Person+" ");
document.write("<br>"+"methods added same as prototype functions in class ---");
document.write(p.greet === Person.prototype.greet);


class Person1 {
  constructor(name){
    this.name = name;
    document.write("<br>"+"constructor  "+this.name);
  }
  static staticmethod(){
    document.write("static method"+"<br>");
  }
  
  greet(){
    document.write("protype method"+"<br>");
  }
  getId() {
    return 10;
  }
}
let p1 = new Person1("abc");
document.write("static method call"+"<br>");
Person1.staticmethod();
p1.greet();

document.write("class inheritance "+"<br>");

class emp extends Person {
constructor(name){
  super(name);
  document.write("derived class constructor");
}  
  getId() {
    return super.getId();
  }
}

let e = new emp("abc");

document.write(e.getId());

