// Prompt the user for a number.
let num = prompt('Enter a number');

// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
console.log(typeof num);

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while(num < 10) {
    num = prompt('Enter a number');
};