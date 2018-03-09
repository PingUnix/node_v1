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
var table = "classroom";

var sql_create = 'create table ' + table + ' (room_id int not null auto_increment, label varchar(255), tags json default null, primary key (room_id))';
var sql_check = "select * from information_schema.tables where table_name=?";

var names = ['class01','class02'];
var type =['meida','plain'];

var sql_insert = `insert into classroom (label, tags) values ('ep02','{"name":"`+names[0] +`","type":"media"}')`;
//var sql_insert = `insert into classroom (label, tags) values ('ep02','{"name":"classA","type":"media"}')`;

//var sql_insert = "insert into classroom (label, tags) values ('ep01','{"name":"class ep01","type":"media"}')";     "


var sql_select = `select * from classroom where tags->"$.type"="media" and tags->"$.name"="class01"`;

var sql_select1 = `select tags->"$.type" AS Tag1 from classroom`;
con.connect(function(err,result){
    if(err) throw err;
        console.log(result);
    
    con.query(sql_check, [table],function(err, result){
        if (err ) 
            throw err;
        
        if(result.length == 0){
                con.query(sql_create, [table],function(err,result){
                    if (err ) 
                    throw err;
                });
        }
        else{
            console.log("table " + table + "has existed, insert the record ");
            con.query(sql_insert, function(err,result){
                if (err) throw err;
                console.log("1 record inserted!");
            });

            con.query(sql_select, function(err,result, fields){
                
                console.log(result[0].room_id);

            });
            con.query(sql_select1, function(err,result, fields){
                
                console.log(result[0].Tag1);

            });
        }
    });

});
//As you select record from mysql, the result object is an array containing each row as an object.
//To return e.g. the address of the third record, just refer to the third array object's address property:

