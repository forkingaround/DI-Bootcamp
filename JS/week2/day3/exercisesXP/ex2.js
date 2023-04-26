// Create an array called colors where the value is a list of your five favorite colors.
const colors = ['Red','Bleu','Yellow','Green','Black'];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(i in colors) {
    console.log('My #'+ (parseInt(i)+1) +' choice is '+colors[i]);
};

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ['st','nd','rd','th'];
for (i in colors) {
    let suffix = suffixes[i];
    if (suffix === undefined) suffix='th';
    console.log('My '+(parseInt(i)+1)+suffix+' choice is '+colors[i]);
};