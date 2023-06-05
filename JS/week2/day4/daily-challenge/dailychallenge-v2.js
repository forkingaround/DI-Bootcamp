// lazy shortcut
let log = console.log;
// log('it works!');

// Reset the textarea
const textarea = document.getElementById('words');
const resetBtn = document.getElementById('clear-btn');
function clearText() {
    console.log(textarea.value);
    textarea.value = '';
}
resetBtn.addEventListener('click', clearText);

//retrieve words and put in array
function getWords () {
    let inputVal = document.getElementById("words").value;
    inputVal = inputVal.replaceAll(',','&comma;');
    // log(inputVal);
    displayTextWordsInStars (inputVal);
    clearText ();
}

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


    // display Text in page
    let outputText = outputArray.toString().replaceAll(',','<br>');
    let displayText = [];
    for (let s of outputText){
        if (s === ' ') {
            displayText.push('&nbsp;');
        } else displayText.push(s);
    }
    document.getElementById("result").style.display ='block';
    document.getElementById("result").innerHTML = displayText.toString().replaceAll(',','');
}


/*
- Commas fucks it up
- it doesn't like a default value for when you just press submit without entering text
- doesn't detect \n

*/