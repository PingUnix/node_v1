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

var sql = 'create table classroom (room_id int not null auto_increment, label varchar(255), tags json default null, primary key (room_id))';

con.connect(function(err,result){
    if(err) throw err;
        console.log(result);
    
    con.query(sql, function(err, result){
        if (err ) 
            throw err;
        console.log(result);

    })

});

