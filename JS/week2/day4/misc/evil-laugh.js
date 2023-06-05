function laugh(numberOfTimes) {
    let str = '';
    let pfix = '*(evil laugh)*';
    let sfix = '!!';
    
    for (let count = 0; count < numberOfTimes; count++) {
        str+='ha';
    }
    str += '!';
    if (numberOfTimes > 10 ){
        str = pfix + str;
        str += sfix;
    }

    return str;
};
console.log(laugh(12));
