const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>Jenkins CI/CD Demo</title>
      </head>
      <body>
        <h1>Jenkins CI/CD Pipeline is working!</h1>
        <p>Docker container is running successfully.</p>
        <p>Deployed using Jenkins and Docker.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});