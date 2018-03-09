var db = require('mysql');
//REST model 
// include file system module to read json file
var fs = require('fs');

var con = db.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mydb'}
);
 