const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let phrase = '';
for (let i in details) {
    phrase += i + ' ' + details[i] + ' ';
}
console.log(phrase);