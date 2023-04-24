// Part I

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);

// I.1.
let myWatchedSeriesLength = myWatchedSeries.length;

//I.2.
let myWatchedSeriesSentence = myWatchedSeries[0]+ ', '+ myWatchedSeries[1] + ' and ' + myWatchedSeries[2] + '. ';

//I.3.
console.log('I watched ', myWatchedSeriesLength, ' series: ', myWatchedSeriesSentence)

// Part II
// II.1.
myWatchedSeries[2] = 'friends';
console.log(myWatchedSeries);

// II.2.
myWatchedSeries.push('Wednesday');
console.log(myWatchedSeries);

// II.3.
myWatchedSeries.unshift('Vikings');
console.log(myWatchedSeries);

// II.4.
console.warn(myWatchedSeries.splice(1,1));
console.log(myWatchedSeries);