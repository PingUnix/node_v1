var db = require('mysql');
var con = db.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mydb'}
);


con.connect(function(err, result){
    if (err) throw err;

    console.log(result);
    var limits= 3;
    var offset = 4;
    var tables = 'students';
    var sql = "SELECT * FROM students LIMIT 2,4 ";
    //var stats = [];
    
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});
