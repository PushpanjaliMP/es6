document.write("Symbols new Primitive type");
document.write("<br>");

const mysymbol = Symbol('mysymbol');
document.write(typeof mysymbol);
document.write(mysymbol.toString());

document.write("Unique ids ");

let s2 = Symbol("Test");
let s3 = Symbol("Test");

document.write(s2 === s3);

document.write("Symbol registry");
let s4 = Symbol.for('RegSymbol');
let s5 = Symbol.for('RegSymbol');
document.write("<br>");
document.write(s4===s5);
document.write("<br>");

let s6 = Symbol('RegSymbol1');
let s7 = Symbol.for('RegSymbol1');
document.write("<br>");
document.write(s6===s7);
document.write("<br>");

document.write("find the key for symbol");
document.write("<br>");
document.write("Symbol.keyFor(s4)"+Symbol.keyFor(s4));

document.write("for of loop");

let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj = { name:"abc"}

document.write("built in symbols");
document.write("<br>");
document.write("for string str"+typeof str[Symbol.iterator]);
document.write("<br>");
document.write("for string arr"+typeof arr[Symbol.iterator]);
document.write("<br>");
document.write("for string num"+typeof num[Symbol.iterator]);
document.write("<br>");

document.write("Iterate an array");

let iterable = [1,2,3];

function createIterator(array) {
  let count =0;
  return {
    next: function(){
      return count <array.length ? {value: array[count++],done:false}:{value:undefined,done:true};
    }
  }
}
document.write("Iterate using next method");
document.write("<br>");
let myIterator = createIterator(iterable);
document.write("myiterator.next()"+myIterator.next().value);
document.write("<br>");
document.write("myiterator.next()"+myIterator.next().value);
document.write("<br>");
document.write("myiterator.next()"+myIterator.next().value);
document.write("<br>");
document.write("myiterator.next()"+myIterator.next().value);
document.write("<br>");

document.write("Itearte a obj by including Symbol.iterator");
document.write("<br>");

document.write("for string obj "+typeof obj[Symbol.iterator]);
document.write("<br>");


let person = {
  
  fname:"anjali",
  lname:"mp"
};

person[Symbol.iterator] = function() {
  let properties = Object.keys(person);
  let count =0;
  let isDone = false;
  let next = () => {
    if(count >=properties.length){
      isDone=true;
    }
    return { done: isDone, value: this[properties[count++]]};
  }
  return {next};
}

for(let p of person){
	document.write(p);
	document.write("<br>");
}

document.write("<br>");

/*
document.write("finding symbol in object");
let fname = Symbol("red");
const person = {
  [fname]:"Chandler"
};
document.write("<br>");
//document.write("getOwnPropertyNames"+Object.getOwnPropertyNames(person));
//document.write("<br>");
document.write("getOwnPropertySymbols"+Object.getOwnPropertySymbols(person));
*/

