const bottlesOfBeer = (n) => {
    /*
    99 bottles of beer on the wall
    99 bottles of beer
    Take 1 down, pass it around
    98 bottles of beer on the wall
    */
    let b1, b2, p;
    let nn = n - 1;
    switch (true) {
        case (nn === 0):
            b1 = 'bottle';
            b2 = 'bottle';
            p = 'it';
            break;
        case (nn === 1):
            b1 = 'bottles';
            b2 = 'bottle';
            p = 'it';
            break;
        default:
            b1 = b2 = 'bottles';
            p = 'them';
    }
    let v1 = n.toString() + ' ' + b1 + ' of beer on the wall\n';
    let v2 = n.toString() + ' ' + b1 + ' of beer\n';
    let v3 = 'Take 1 down, pass ' + p + ' around\n';
    let v4 = nn.toString() + ' ' + b2 + ' of beer on the wall\n';
    console.log(v1,v2,v3,v4,'\n');
    if (nn === 0) {
        return;
    }
    //call yourself with value of nn
    bottlesOfBeer(nn);
}
let b = prompt('Enter number of bottles');
bottlesOfBeer(parseInt(b));