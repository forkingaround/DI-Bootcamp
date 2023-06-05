const fs = require('fs');

// CREATE A FILE
fs.writeFile('mynewfile.txt', 'Hello World!', function (err) {
    if(err) throw err
    else console.log('Saved!');
});

// READ A FILE
fs.readFile('content.txt', 'utf8', function (err, data) {
    if (err) throw err
    else console.log(data);
});


// UPDATE A FILE
fs.appendFile('content.txt', '\nNew content added!', function (err) {
    if (err) throw err
    else console.log('data updated!');
});


// DELETE A FILE
fs.unlink('mynewfile.txt', function (err) {
    if (err) throw err
    else console.log('File deleted!');
});