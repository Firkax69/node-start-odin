const http = require('http');
const fileSystem = require('fs');
const url = require('url');

const PORT = 8080 || process.env.PORT;

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;

    switch(page) {
        case('/'):
            fileSystem.readFile('./index.html', (error, data) => {
                if (error) {
                    throw error;
                } 
                res.writeHead(200, {'Content-Type': 'text-html'});
                res.write(data);
                res.end();
            })
            break;
        case('/contact'):
            fileSystem.readFile('./contact.html', (error, data) => {
                if (error) {
                    throw error;
                } 
                res.writeHead(200, {'Content-Type': 'text-html'});
                res.write(data);
                res.end();
            })
            break;
        case('/about'):
            fileSystem.readFile('./about.html', (error, data) => {
                if (error) {
                    throw error;
                } 
                res.writeHead(200, {'Content-Type': 'text-html'});
                res.write(data);
                res.end();
            })
            break;
        default:
            fileSystem.readFile('./404.html', (error, data) => {
                if (error) {
                    throw error;
                } 
                res.writeHead(200, {'Content-Type': 'text-html'});
                res.write(data);
                res.end();
            })
    }
})

server.listen(PORT);

