for (let i=0; i<15; i++) {
    if(i%2 == 0) {
        console.log(i, 'is even');
    } else {
        console.log(i, 'is odd');
    }
}
for (let j=0; j<=1; j+=0.1){
    console.log('10', j, 10%j);
}


let names= ["john", "sarah", 23, "Rudolf",34];

//ex1
/*
1. Write a JavaScript for loop that will go through the variable names.

if the item is not a string, pass.
if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.

2. Write a JavaScript for loop that will go through the variable names

if the item is not a string, go out of the loop.
if the item is a string, display it.


*/
//console.log(typeof names[0]);

for (i of names) {
    if (typeof i !== 'string') {
        // console.log('--------');
        console.log(i,'pass');
        // console.log('--------');
    } else {
        let check = i.charAt(0);
        let uCase = check.toUpperCase();
        // console.log(uCase);
        if (check !== uCase) {
            i = i.replace(check, uCase);
            console.log(i);
        }
    }
}
console.log(names);

//ex2
for(i in names) {
    if (typeof names[i] !== 'string'){
        break;
    } else {
        console.log(names[i])
    }
}

