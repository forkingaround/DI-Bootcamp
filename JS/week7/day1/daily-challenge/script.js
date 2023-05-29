const a = require('./main.js');
const b = 5;

console.log(a.largeNumber+b);

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<h1>Hi there at the frontend</h1><p>My Module is ${a.largeNumber+b}</p>`);
    console.log("I'm listening");
}).listen(3000);