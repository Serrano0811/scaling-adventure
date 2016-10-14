var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {"content-Type": "text/plain"});
	res.end("Hello World\n");
});

server.listen(8000);

// A message to inform the user that the server is up and running.
console.log("Server running at http://localhost:8000");