var http=require('http');
var dt = require('./module1');
var url = require('url');
var fs = require('fs');

fs.rename('header1.html','header.html', function(err){
    if (err) throw err;
    console.log('file rename');
});