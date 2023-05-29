const largeNumber = 356;
const http = require('http');
const server2 = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<p>Current time is ${new Date()}</p>`);
}).listen(8000);


module.exports = { largeNumber: largeNumber };