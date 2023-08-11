// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
// Create server
http.createServer(function(req, res) {
    // Get the path
    var pathName = url.parse(req.url).pathname;
    // Get the extension of the file
    var extName = path.extname(pathName);
    // Set the content type
    var contentType = 'text/html'});