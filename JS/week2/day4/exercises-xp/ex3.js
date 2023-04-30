let sum = 0;
const isDivisible = (divisor) => {
    for(let count = 0; count < 500; count++) {
        if (count % divisor === 0) {
            console.log('Divisible by ' + divisor, count);
            sum += count;
        } 
    }
    console.log('Sum:',sum);
}
isDivisible(23);