// Create an HTTP server by loading http module
var http = require('http');

// Configure the HTTP server to respond identically to any request
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from the other side... \n");
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log("Mensa Server running at http://127.0.0.1:3000/");
