const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        res.end('This is the About page');
    } else if (req.url === '/contact') {
        res.end('This is the Contact page');
    } else if (req.url === '/term') {
        res.end('This is the Term page');
    } else {
        res.end('Welcome to the homepage!');
    }
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});

