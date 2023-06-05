let team = ['Cantona', 'Zidane', 'Salah', 'Messi'];
const hasEnoughPlayers = (arr) => {
    if (arr.length >= 5) {
        return true;
    } else {
        return false;
    }
};

console.log(hasEnoughPlayers(team));