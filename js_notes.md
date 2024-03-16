## 01-Print
To print content in js we use below syntax 
```js
console.log("Hello world");
```

## 02-Variables in js
- variables are containers for data.
- variables are anything which can be changed.
- eg: radius, length, age etc

```javascript
radius = 15;
console.log("Radius of a circle: ",radius);
console.log("Area of circle is: ", 3.14*radius*radius);
``` 

- In variables we generally define the **null** and **undefined** value.
- null: nothing is present
- undefined: don't know what is present
```js
x=null;
y=undefined;
console.log(x,y);
```

### Variable rules
- Variable names are case sensitive: 'a' and 'A' are diffrent.
- Only letters, digit, underscore(_), and $ is allowed. (not even space).
- Only a letter, underscore(_) or $ should be 1st character.
- Reserved words cannot be variable names.

### Note:
- Js is dynamically typed language.
- Always give variable name where, From variable we can identify the variable use.
- eg: fullname, age, radius, etc.

## let, const & var
- In variable declaration we should always use below reserved key.
- var: Variable can be re-declared & updated. A global scope variable.

```js
    var age=50;
    var age=60;
    console.log(age);
```
- let: Variable cannot be re-declared but can be updaated. A block scope variable.
```js
    let rad = 20;
    rad = 30;
    // let rad=50; this will throw error
    console.log(rad);
```
- const: Variable cannot be re-declared or updated. A block scope varible.
```js
    const z=2;
    // z=3; this will throw error bcoz we can't update const variable
    console.log('z= ',z);
```

### Note
- In todays time we should never use the var because it can re-declared and updated because that we won't know if we ever intialized same named variable or not.

## 03-Datatypes in js
- Whatever we declare in js it is assign with the some kind of datatypes.
- Primitive datatype: number, string, boolean, undefined, Null, BigInt, symbol
- Non-primitive datatype: combination of primitive datatypes(objects). eg: array, functions etc.
- syntax to create non-primitive datatype
```js
// creation of objects
    const student = {
        fullname: 'Anuj kumar',
        age: 22,
        cgpa: 7.34,
        isPass: true
    }
    console.log('Details of student: ', student);
```
- syntax to know the datatype of variable is :
```js
    typeof var_name;
 ```


## 04-Comments in js
- This line of code is never get executed.
```js
// this is a single line comment
/*
this is a a 
multi line comment.
*/
```

## 05-Operators in js
- used to perform some operation on data.
- **Arithmetic Operators**: +, -, *, /
- Modulus(remainder)- %
- Exponentiation(power): ** 
- Increment
- Decrement
- eg:
```js
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
```

- **Assignment operators**: =, +=, -=, *=, /=, %=, **=
```js
    // Assignment operators
    let x=2;
    console.log('x= ',x);
    // x+=2 is same as x=x+2
    console.log('x+=2= ',x+=2);
    // x-=2 is same as x=x-2
    console.log('x-=2= ',x-=2);
    // x*=2 is same as x=x*2
    console.log('x*=2= ',x*=2);
    // x/=2 is same as x=x/2
    console.log('x/=2= ',x/=2);
    // x%=2 is same as x=x%2
    console.log('x%=2= ',x%=2);
    // x**=2 is same as x=x**2
    console.log('x**=2= ',x**=2);
```
- **Comparison operators**: ==(equal to), ===(equal to & type), !=(not equal to), !==(not equal to & type)
```js
    // Comparision operators
    let y=2;
    console.log(x,'==',y,":",x==y);
    console.log(x,'!=',y,":",x!=y);
    console.log(x,'===',y,":",x===y);
    console.log(x,'!==',y,":",x!==y);
```
- **Logical operators**: &&(and), ||(or), !(not)
| a | b | &&(and) |!(not) | \| \| |(or) | 
|---|---|---------|--------|-------|
|true|true|true|false|true|
|true|false|false|true|true|
|false|true|false|true|true|
|false|false|false|true|false|
```js
    // logical operator
    x=1;
    y=0;
    console.log(x,'&&',y,":",x&&y);
    console.log(x,'||',y,":",x||y);
    console.log('!',y,":",!y);
```
## 06-Conditional statements
- To implement some condition in the code
- if, else, else if
```js
    // conditional statements
    // if
    x=10;
    y=20;
    if(x>y){
        console.log('x is greater than y');
    }
    // else
    if(x<y){
        console.log('x is less than y');
    }
    else{
        console.log('x is greater than y');
    }
    // else if
    if(x<y){
        console.log('x is less than y');
    }
    else if(x>y){
        console.log('x is greater than y');
    }
    else{
        console.log('x is equal to y');
    }
```
- **Ternary operators**: condition?true output:false output
```js
    // ternary operator
    x=10;
    y=20;
    console.log(x>y?'x is greater than y':'x is less than y');
```
- **switch statement**
```js
    // switch
    x=10;
    y=20;
    switch(x){
        case 10:
            console.log('x is 10');
            break;
        case 20:
            console.log('x is 20');
            break;
        default:
            console.log('x is not present');
    }
```