const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Contect-Type', 'text/html');

    if (url === '/') {
        res.setHeader('Contect-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body>');
        res.write('<form action="message" method="POST">Message:<input type="text" name="message"/><button type="submit">Save</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });

        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];

            fs.writeFileSync('message.txt', message)
        })
    }

    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello Node JS & Nestjs</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);