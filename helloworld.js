/*
| in this case we're using the http library, but, it 
| can be handled in a numerous way , using nodejs, a 
| raw TCP connection, etc.
*/
var http = require('http');


var server = http.createServer(function (req, res) {
	// Here we set some meta data about our response
	res.writeHead(200, {"content-Type": "text/plain"});
	// Here we actually send the response
	res.end("Hello World\n");
});
// And ofcouse we need to tell the server to listen.
server.listen(8000);

// A message to inform the user that the server is up and running.
console.log("Server running at http://localhost:8000");