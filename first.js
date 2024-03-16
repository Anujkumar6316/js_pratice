// in js we use console.log()-> to print the content
console.log('hello world');

// variables in js
radius = 15;
console.log("Radius of a circle: ",radius);
console.log("Area of circle is: ", 3.14*radius*radius);

// null: nothing is present
// undefined: don't know what is present
x=null;
y=undefined;
console.log(x,y);

// var, let, const 
var age=50;
var age=60;
console.log(age);

// let
let rad = 20;
rad = 30;
// let rad=50; this will throw error
console.log(rad);

// const
const z=2;
// z=3; this will throw error bcoz we can't update const variable
console.log('z= ',z);

// non-primitive datatypes
// creation of objects
const student = {
    fullname: 'Anuj kumar',
    age: 22,
    cgpa: 7.34,
    isPass: true
}
console.log('Details of student: ', student);