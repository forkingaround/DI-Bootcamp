const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
/*
The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
*/

let shoppingList = ['banana', 'orange', 'apple'];
// console.log('banana' in prices);
let checkItem = (item) => {
    // console.log(item in prices);
    if (item in prices) {
        // console.log(prices[item]);
        return prices[item];
    }
}
let checkInventory = (item) => {
    if (item in stock) {
        stock[item]--;
    }
    return stock[item];
    // console.log(stock.banana);
}
myBill = () => {
    let bill = 0;
    for (let i in shoppingList){
        bill += checkItem(shoppingList[i]);
        checkInventory (shoppingList[i]);
    };
    return bill;
};
console.log(myBill());
console.log(stock);