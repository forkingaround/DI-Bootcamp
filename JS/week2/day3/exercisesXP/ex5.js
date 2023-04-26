// Create an object called family with a few key value pairs.
const family = {
    surname: 'Doe',
    members: 4,
    parents: ['John', 'Jane'],
    children: ['Peter', 'Sarah']
};

for(let i in family) {
    // Using a for in loop, console.log the keys of the object.
    console.log(i);
    
    // Using a for in loop, console.log the values of the object.
    console.log(family[i]);
};
