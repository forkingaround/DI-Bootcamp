
const youWannaPlay = () => {
    return confirm("Would you like to play a game?");
}

const askUserForNumber = () => {
    let n = prompt("enter a number between 0 and 10");
    let num = parseInt(n);
    if (num === NaN || !(/^\d+$/.test(n)) || num > 10) {
        alert("Sorry it’s not a good number, Goodbye");
        askUserForNumber();
    } else {
        return num;
    }
}

const getRandomNumber = () => {
    return Math.round(Math.random()*9);
}

const compareNumbers = (userNumber, computerNumber) => {
    if (userNumber == computerNumber) {
        alert("WINNER");
        return true;
    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer’s, guess again");
        return false;
    } else if (userNumber < computerNumber) {
        alert("Your number is smaller then the computer’s, guess again");
        return false;
    } else {
        alert("Something is wrong", userNumber, computerNumber);
        return null;
    }
}
const guessTheNumber = (count, randomNumber) => {
    if (count > 0) {
        let userNumber = askUserForNumber();
        let result = compareNumbers(userNumber, randomNumber);
        if (result) {
            return;
        } else {
            guessTheNumber(count - 1, randomNumber);
        }
    } else {
        alert("out of chances");
    }
}

const playTheGame = (firstRun) => {
    if (firstRun) {
        start = youWannaPlay();
        if (!start || start === null) {
            alert("No problem, Goodbye");
            return null;
        }
    }
    console.warn("Game started");
    let computerNumber = getRandomNumber();
    console.log("__computer number:", computerNumber);
    guessTheNumber(3, computerNumber);
    // compareNumbers(askUserForNumber(), getRandomNumber());
}