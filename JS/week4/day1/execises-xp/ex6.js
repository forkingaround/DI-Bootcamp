
// Exercise 6 : Bank Details
// In this exercise, you have to decide which type of variables you have to use
// (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money 
// currently in your account.
let bankAmount = 5000;

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const VATPercentage  = .1;

// Create an array with all your monthly expenses, both positive and negative 
// (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
let details = ["+200", "-100", "+146", "+167", "-2900"];

// Create a program that modifies the expenses (ie. the positive AND the negative expenses) 
// so that they will include taxes (multiply each expense by the VAT).
const withVat = details.map((expense) => {
    const amount = parseFloat(expense); 
    // console.log(amount);
    const VATAmount = amount * VATPercentage; 
    // console.log(VATAmount)
    console.log((amount + VATAmount).toFixed(2));
    return (amount + VATAmount).toFixed(2); 
});
withVat.forEach(expense => {bankAmount += parseFloat(expense); console.log(bankAmount)});

// Display your current bankAccount standing at the end of the month.
console.log("Bank Amount:", bankAmount.toFixed(2));