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
 
var courses =[];
// read file sample.json file
fs.readFile('./sample.json',
    // callback function that is called when reading file is done
    function(err, data) {        
        // json data
        //var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(data);
        console.log(jsonParsed);

        // access elements
        console.log(jsonParsed.courses.length);
        for ( var item in jsonParsed.courses)
            console.log(jsonParsed.courses[item].name + " is from " + jsonParsed.courses[item].teacher_id);
        
            

        con.connect(function(err, result){
            if (err) throw err;
                console.log(result);
            
            for ( var item in jsonParsed.courses){
                var values = [
                    [jsonParsed.courses[item].name, jsonParsed.courses[item].teacher_id],
                ];
                var sql = "insert into courses (name,teacher_id) values ?";
             //var stats = [];
            
                con.query(sql, [values],function (err, result) {
                 if (err) throw err;
                 //console.log(result);
            });
            }
        });
        

    });
 
