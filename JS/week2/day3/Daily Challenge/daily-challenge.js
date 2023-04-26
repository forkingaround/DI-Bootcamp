// using 1 loop
let str = ['*', '**', '***', '****', '*****', '******'];
let output = '';
for (let x = 0; x < 6; x++){
    output = output.concat(str[x],'\n');
}
console.log(output);


// Using 2 loops
var numberOfStars = 0;
for (let i = 0; i < 6; i++){
    numberOfStars = i + 1;
    // console.log(numberOfStars);
    let stars = '';
    for (let s = 0; s < numberOfStars; s++) {
        stars += '*';
    }
    console.log(stars);
}
