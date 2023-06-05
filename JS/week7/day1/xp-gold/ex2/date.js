/*
In a new file called date.js, create a function that accepts a birthdate as an argument (in the format of your choice), and then return the number of minutes the user lived in his life. Export this function.
Hint: Hardcode the value of the argument, don’t ask a user for it.
*/
const minLived = (date) => {
    const now = new Date();
    const birth = new Date(date);
    const timeLived = now.getTime() - birth.getTime();
    const minLived = Math.floor(timeLived / (1000 * 60));
    return `You have lived ${minLived} minutes`;
}
console.log(minLived('1977-01-31T20:59'));

module.exports = {
    minLived : minLived
}