let log = console.log;
/*
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]

Hint
The number of stars that wraps the sentence, must depend on the length of the longest word.
*/
// The exercise is here
function displayTextWordsInStars (inputVal = 'You need to type some words') {
    let del = /\s/g;
    wordsArr = inputVal.split(del);
    // log(wordsArr);

    // find longest word to set width
    // let longestWord = 0;
    let longestWord = 0;
    let longestWordIndex = 0;
    for (let i in wordsArr) {
        let currentLength = wordsArr[i].length;
        if (currentLength > longestWord) {
            longestWord = currentLength;
            longestWordIndex = i;
        }
    }
    // log('longest word:', wordsArr[longestWordIndex], longestWord);

    let outputArray = [];
    let topAndBottomRows = '';
    for (let i = 0; i < longestWord + 4; i++) {
        topAndBottomRows += '*';
    }
    log(topAndBottomRows);

    for (let w of wordsArr) {
        let row = '* ' + w;
        for (let j = 0; j < (longestWord) - w.length; j++){
            row += ' ';
        }
        row += ' *';
        outputArray.push(row);
    }
    outputArray.push(topAndBottomRows);
    outputArray.unshift(topAndBottomRows);
    log(outputArray);
    
    let consoleOutput = outputArray.toString().replaceAll(',','\n');
    log(consoleOutput);
    return consoleOutput
};

displayTextWordsInStars('Sky is Blue Grass is Green');
