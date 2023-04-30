/*
Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.
*/
function parseDigits(str) {
    // Verify that the string contains only digit characters
    if (/^\d+$/.test(str)) {
      // Parse the string into a number and return it
      return parseInt(str);
    } else {
      // Return null if the string contains non-digit characters
      return null;
    }
}

const hotelCost = (n) => {
    // let n = prompt('How many nights are you staying?');
    n = parseDigits(n);
    if (n === null) {
        promptNumberOfNights();
    } else {
        // console.warn('total price=',hote2lCost(n));
        return n * 140;
    }
}
// promptNumberOfNights();

/*
Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$
*/

const planeRideCost = (d) => {
    // let d = prompt ('Enter your destination');
    if (d === '') {
        planeRideCost();
    } else {
        let destinations = [183, 220, 300];
        d = d.toLowerCase();
        switch(d) {
        case 'london':
            return destinations[0];
            break;
        case 'paris':
            return destinations[1];
            break;
        default:
            return destinations[2];
        }
    }
}
// console.log(planeRideCost());


/*
Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.
*/
const rentalCarCost = (c) => {
    // let c = prompt('How many days would you like to rent a car?');
    let n = parseDigits(c);
    if (c === '' || n === null) {
        rentalCarCost();
    } else {
        let cost = n * 40;
        if (n > 10) {
            cost -= cost * .05;
            return cost;
        } else return cost;
    }
}
// console.log(rentalCarCost());

/*
Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
*/
const totalVacationCost = () => {
    let d = prompt ('Enter your destination');console.log('d', d);
    d = planeRideCost(d);console.log(d);
    let n = prompt('How many nights are you staying?');console.log('n',n);
    n = hotelCost(n);console.log(n);
    let c = prompt('How many days would you like to rent a car?');console.log('c',c);
    c = rentalCarCost(c);console.log(c);
    return (d + n + c);
}
console.log(totalVacationCost());