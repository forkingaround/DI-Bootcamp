const compare = (x,y) => {
    const p = new Promise((bou,lou) => {
        y > x ? lou(y) : bou(x);
    }).then(a => console.log(a))
    .catch(b => console.log(b));
}
