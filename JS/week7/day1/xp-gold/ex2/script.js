const person = require('./date.js');
const prompt = require('prompt-sync')();

let bdate = prompt('Enter your birthdate (YYYY-MM-DD): ');
console.log(person.minLived(bdate));