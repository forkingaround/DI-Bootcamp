let ans = prompt('how old are you?');
if (ans < 18) {
    alert('Sorry, you are too young to drive this car. Powering off.');
} else if (ans == 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
} else {
    alert('Powering On. Enjoy the ride');
}

