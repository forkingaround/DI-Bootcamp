/*
🌟 Exercise 5 : Colors #2
Write a JavaScript program that displays the colors in the following 
order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is 
Red.” ect…
Hint : Use the array methods taught in class and ternary operator.
*/

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow","Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow","Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Orange", "Violet", "Indigo", "Yellow","Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow","Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow","pig"];
const ordinal = ["th","st","nd","rd"];
colors.forEach( (val, index) => {
    let i = index + 1;
    let rank = i + ordinal[
        i > 3 ? i > 20 ? i%10 > 3 ? 0 : i%10 : 0 : i%10
    ];
    console.log(`${rank} choice is ${val}`);

});