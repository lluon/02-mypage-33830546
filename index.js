var http = require("http"); // Import the built-in 'http' module to create an HTTP server
const port = 8000; // Define the port number the server will listen on
""
http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
});
