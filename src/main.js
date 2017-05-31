
let i =10;

//let example 1

document.write("Let within for loop");

for(let i=0;i<5;i++) {
	console.log(i + " i");
}

document.write('after loop i '+i);

//let example2

document.write("block scope");


function func() {

	const foo =5;

	if(true) {
		const foo = 10;
		document.write(foo);
	}

	document.write(foo);
}

document.write("Ptfall for immutable \n");

const obj = {};
obj.prop = 123;

document.write("obj.prop "+obj.prop);

document.write("Freeze the object const obj1 = Object.freeze({ foo: {}}) \n");
const obj1 = Object.freeze({ foo: {}});

//comment 1:  uncaught typeeeor foo is read only
//obj1.foo = {};

obj1.foo.prop = 123;

document.write("obj.prop "+obj1.foo);

document.write("obj.prop.foo"+obj1.foo.prop);

document.write("Temporal dead zone");

