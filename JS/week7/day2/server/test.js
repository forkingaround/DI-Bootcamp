const http = require('http');
const json = 
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(json));
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404);
        res.end(`<h1>404 Not Found</h1>`);
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});