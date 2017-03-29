var http = require('http')
var fs = require('fs')
var path=require('path')

http.createServer(function (req, res) {

    // 主页
    if (req.url == "/") {
        console.log(path.dirname(__filename))
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("Welcome to the homepage!");
    }

    // About页面
    else if (req.url == "/xml") {
        fs.readFile(path.dirname(__filename)+'/response.xml', function readData(err, data) {
            console.log(data)
            res.writeHead(200, { "Content-Type": "text/xml" });
            res.end(data);
        })
    }
    else if (req.url == "/json") {

        fs.readFile(path.dirname(__filename)+'/response.json', function readData(err, data) {
            console.log(data)
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        })
    }
    // 404错误
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 error! File not found.");
    }

}).listen(8080, "localhost");