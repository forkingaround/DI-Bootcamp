/*
Write a function that takes an array as parameter and that will return the sum of all elements in an array
e.g. let numbers = [10, 20, 30, 88, 95];
Write the same code using: 
a) a while loop
b) a for loop
c) a forEach loop
*/
let numbers = [10, 20, 30, 88, 95];

// A
let count = 0;
let sum = 0;
while (count < numbers.length) {
    sum += numbers[count];
    count++;
}
console.log(sum);

// B
sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log(sum);

// C
sum = 0;
numbers.forEach( (num) => {
    // console.log(num);
    sum += num;
});
console.log(sum);