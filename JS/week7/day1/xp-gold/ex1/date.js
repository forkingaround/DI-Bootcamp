const returnTimeToJanFirst = (date) => {
    const now = new Date();
    const jan1stNextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = jan1stNextYear.getTime() - now.getTime();
  
    // Calculate days, hours, and minutes left
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((timeLeft / (1000 * 60)) % 60);
  
    return `The 1st January is in ${daysLeft} days and ${hoursLeft}:${minutesLeft} hours`;
}
//1995-02-04T24:00
//returnTimeToJanFirst ('2023-05-29');

module.exports = { timeToJan : returnTimeToJanFirst };