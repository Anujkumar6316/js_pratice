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

## Datatypes in js
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