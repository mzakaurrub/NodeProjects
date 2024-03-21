const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to our homepage</h1>');
        res.end();
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Here is our short history');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">Back home</a>
        `);
        res.end();
    }
});

server.listen(5000);
