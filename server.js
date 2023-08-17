// Import the http module
const http = require('http');

// Define the port number
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

//set the response   
  res.end('Hello, World!\n');
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


