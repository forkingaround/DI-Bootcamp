const people = ["Greg", "Mary", "Devon", "James"];

// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

// Write code to replace “James” to “Jason”.
people[2] = 'Jason';
console.log(people);

// Write code to add your name to the end of the people array.
people.push('Sanjiv');
console.log(people);

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
console.log(people.slice(1,3));

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'));
/*
Returns -1 because it cannot find 'Foo' in the array
*/

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
var last = people[people.length-1];
console.log(last);


// Part II - Loops
console.log('%cPart II','color:red;');
// Using a loop, iterate through the people array and console.log each person.
for(let i of people){
    console.log(i);
}
console.log('----');
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.

/*
Using while and break
*/
let i = 0;
while (i < people.length) {
    console.log(people[i]);
    if (people[i] === 'Jason') {
        break;
    };
    i++;
}

