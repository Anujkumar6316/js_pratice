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

//operator in js
let a=5;
let b=6;

// arithmetic operator
console.log('a+b= ',a+b);
console.log('a-b= ',a-b);
console.log('a*b= ',a*b);
console.log('a/b= ',a/b);

// exponential and modulus
console.log('a**b= ',a**b);
console.log('a%b= ',a%b);

// uinary operator
// increment
console.log('++a= ',++a); //pre increment o/p:6
a=5;
console.log('a++= ',a++); //post increment o/p:5
// decrement
a=5;
console.log('--a= ',--a); //pre decrement o/p:4
a=5;
console.log('a--= ',a--); //post decrement o/p:5

// loops in js
for(let i=1;i<=5;i++){
    console.log("anuj");
}

// while loop in js
let i=0;
while(i<5){
    console.log(++i);
}
// do while loop
i=0;
do{
    console.log(++i);
}while(i<5);
// for-of loop 
let str='helloWorld'
for(let i of str){
    console.log('i=',i);
}
// for-in loop
let _student= {
    name: 'Anuj kumar',
    age: 23,
    cgpa: 7.34
};

for(let key in _student){
    console.log('key = ',key,",value = ", _student[key]);
}

// Q1. Print all even number between 0 to 100.
for(let i=0;i<=100;i++){
    if (i%2==0){
        console.log(i);
    }
}

// Q2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enter correct value.
// let gameNumber = 25;
// let userGuessNum = prompt("Guess the game number: ");
// while(gameNumber != userGuessNum){
//     userGuessNum = prompt("Guess the game number again: ");
// }
// if (gameNumber==userGuessNum){
//     console.log("Congratulation, you have guessed the right game number.");
// }

// template literals in js
let specialString=`this is a special type of string`
console.log(specialString);
console.log("type of specialString: ",typeof specialString);

console.log(`Hi my name is ${_student.name} and i have the cgpa of ${_student.cgpa}`);

//Q1. Prompt the user to enter their full name.Generate a username for them based on the input. Start username with @,followed by their full name and ending with the fullname length.
// eg: user name="shardhakhapra", username should be"@shradhakhapra13”
// let fullname = prompt("Enter your full name");
// updatedfullname = fullname.trim();
// let len = fullname.length
// console.log(`Your generated username is @${updatedfullname.concat(len)}`);

// arrays in js
let marksList = [50,60,70,80,90];
// looping over markslist
for(let i=0;i<marksList.length;i++){
    console.log(marksList[i]);
}

// Q. For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class.
let marks = [85,97,44,37,76,60];
let sm=0;
for(let i=0;i<marks.length;i++){
    sm+=marks[i];
}
console.log(`Avg marks of the class is ${sm/marks.length}.`);

//Q.For a given array with prices of 5 items -> [250,645,300,900,50].All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250,645,300,900,50];
for(let i=0;i<prices.length;i++){
    prices[i]=prices[i]-prices[i]*0.1;
}
console.log(prices);

// functions and methods
function add(a, b){
    console.log(a+b);
}
add(33,2);

// syntax
// Type-01
// function functionName(){
//     //some code
// }
// Type-02
// function functionName(param1, param2, ...){
//     // some code
// }

// function call
// functionName();

// arrow function
const sum = (a,b) => {
    console.log(a+b);
}

console.log(sum);
sum(3,28);
// arrow function of multiplication
const mul = (a,b) => {
    return a*b;
}
console.log(mul);
console.log(`Multiplication of 3 and 5 is ${mul(3,5)}`);

// Q.Create a function using the "function" keyword that takes a String as an argument &returns the number of vowels in the string.
function vowelsCount(str){
    let vowelList = ['a','e','i','o','u'];
    // making string into lowercase
    let ans=0;
    str=str.toLowerCase();
    for(let val of str){
        for(let v of vowelList){
            if(val==v){
                ans++;
            }
        }
    }
    return ans;
}

console.log("helo",vowelsCount('Helloworld'));

// forEach in js
let arr = [1,2,3,4,5];
arr.forEach(function printVal(val){ //for forEach will send each value to the function.
    console.log(val);
})

// Q. For given array of numbers, print the square of each value using the forEach loop.
arr.forEach(val => {
    console.log(val);
})

const calSq = (val) => {
    console.log(val**2);
}

arr.forEach(calSq);