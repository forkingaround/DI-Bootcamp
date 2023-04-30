/*
changeEnough(14.11, [2,100,0,0]) => returns false
changeEnough(0.75, [0,0,20,5]) => returns true

A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01
*/
const changeEnough  = (itemPrice, amountOfChange) => {
    // console.log(itemPrice, amountOfChange);
    const denom = [.25, .1, .05, .01];
    let sum = '';
    for (i in amountOfChange) {
        sum += amountOfChange[i] * denom[i];
    };
    if (sum < itemPrice) {
        return false;
    } else {
        return true;
    }
};
// 
// changeEnough(0.75, [0,0,20,5])
console.log(changeEnough(14.11, [2,100,0,0]));