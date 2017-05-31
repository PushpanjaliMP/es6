let i =10;

//let example 1

document.write("Let within for loop \n");
document.write("<br>");
for(let i=0;i<5;i++) {
	document.write(i + " i"+"\n");
  document.write("<br>");
}

document.write('after loop i \n'+i);
document.write("<br>");
//let example2

document.write("block scope \n");
document.write("<br>");

function func() {

	const foo =5;

	if(true) {
		const foo = 10;
		document.write(foo+"\n");
    document.write("<br>");
	}

	document.write(foo);
  document.write("<br>");
}

document.write("Ptfall for immutable \n");
document.write("<br>");


const obj = {};
obj.prop = 123;

document.write("obj.prop \n"+obj.prop);
document.write("<br>");
document.write("<br>");

document.write("Freeze the object const obj1 = Object.freeze({ foo: {}}) \n");
document.write("<br>");

const obj1 = Object.freeze({ foo: {}});

//comment 1:  uncaught typeeeor foo is read only
//obj1.foo = {};

obj1.foo.prop = 123;

document.write("obj.prop "+obj1.foo+"\n");
document.write("<br>");

document.write("obj.prop.foo"+obj1.foo.prop+"\n");
document.write("<br>");
document.write("<br>");
document.write("Temporal dead zone");
document.write("<br>");

if(true) {
  document.write(typeof foo1);
  document.write("<br>");
  document.write(typeof aVariable);
  let foo1;
}

document.write("Parameters default values don't see the scope of the body");
document.write("<br>");

const obj3 = 'outer';
function bar(func = x=> obj3){
  const obj3="inner";
  document.write("<br>");
  document.write(func());
  document.write("<br>");
}

document.write("call bar function with default function");
bar();

