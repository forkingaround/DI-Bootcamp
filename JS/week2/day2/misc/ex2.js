// "switch" has better performance than "if"
let a = 2 + 2;
switch(a) {
    case 4:
        console.log('Right!');
        break;
    case 3: // grouping 2 cases
    case 5:
        console.log('Wrong!');
        break;
    default:
        console.log('The result');
}