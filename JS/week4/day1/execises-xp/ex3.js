/*
🌟 Exercise 3 : Is It A String ?
Instructions
Write a JavaScript arrow function that checks whether the value of 
the argument passed, is a string or not. Use ternary operator
Check out the example below to see the expected output
*/

const isString = v => typeof v === 'string';
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false