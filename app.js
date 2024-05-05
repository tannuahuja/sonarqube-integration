// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server object using the http.createServer() method
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response body ("Hello, World!") and end the response
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Display a message in the console indicating the server has started
  console.log(`Server running at http://${hostname}:${port}/`);
});
