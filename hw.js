var http=require('http');
var dt = require('./module1');
var url = require('url');
var fs = require('fs');


http.createServer(function(req, res){
    var q =  url.parse(req.url, true).query;
    var txt = q.year + " , "  + q.month;

    res.writeHead(200, {'ContentType':'text/html'});
    res.write('the current time is ' + dt.myDateTime() + '\n');
    res.write(txt);
    res.write(req.url);
    res.end('hello world!');
}).listen(8080);