// Ex 1
let x = 5;
let y = 2;

if (y > x) {
    console.log(y, 'is the biggest number')
} else {
    console.log(x, 'is the biggest number')
};

// Ex 2
let newDog = 'Chihuahua';
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog == 'Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed')
} else {
    console.log('I dont care, I prefer cats');
};

// Ex 3
let userInput = prompt('Enter number');
let divisibleByTwo = parseInt(userInput) % 2;
// console.log(divisibleByTwo);
// console.log(userInput%1);
if ((userInput % 1) > 0) {
    alert('Integers only. No decimals please.');
} else if (divisibleByTwo > 0) {
    console.log(userInput, 'is an odd number');
} else if (divisibleByTwo == 0) {
    console.log(userInput, 'is an even number');
} else console.log('you did not enter an integer');

//Ex 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch (users.length) {
    case 0:
        console.log('no one is online');
        break;
    case 1:
        console.log(users[0], 'is online');
        break;
    case 2:
        console.log(users[0],'and',users[1], 'are online');
        break;
    default:
        console.log(users[0],',',users[1],'and',(users.length-2),'more are online');
};