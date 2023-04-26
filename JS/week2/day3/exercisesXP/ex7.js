const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. 
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
let secret = [];
for (i in names) {
    secret.push(names[i].charAt(0).toUpperCase());
}
secret = secret.sort().toString().replaceAll(',','');
console.log(secret);