var db = require('mysql');

var con = db.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mydb'
});

con.connect(function(err){
    if (err) throw err;
    console.log('connected!');
    //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
      //var sql = "insert into customers (name, address) values ('apple3', 'wabx 83')";
    //var sql = "insert into customers (name, address) values ('tst1-1', 'hwy 8-1')";
    var adr = 'hwy 8';
    var name='tst';
    //var sql = 'SELECT * FROM customers WHERE name = ? or address=?';
    //var sql = "delete from customers where name ='tst'";
    //var sql = 'drop table customers';
    var table = 'employee';
    /*con.query(sql, [name,adr], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
    */
    //on.query("update students set address='wii33', name='noname' where id=1", function(err, result){
    con.query(`insert into students (name, address) values ('apple','Don 1'),('soname','Petery 2'),('Mike', 'Queen 3')`,
        function(err, result){
    if (err){
            throw err;
        }     
        console.log('updated the table' + result.affectedRows);
    });
    var values = [
        ['demian', 'demian@gmail.com'],
        ['john', 'john@gmail.com'],
        ['mark', 'mark@gmail.com'],
        ['pete', 'pete@gmail.com']
    ];

    var statement = 'INSERT INTO students (name, address) VALUES ?';
  //var insertStatement = [students, values];
  //var sql = con.format(statement, insertStatement);
    con.query(statement, [values], function(err, result) {
    if (err) {
      throw (err);
    }
    
    var rowIds = [];
    for (var i = result.insertId; i < result.insertId + result.affectedRows; i++) {
      rowIds.push(result);
    }
    /*console.log(result.insertId);
    console.log(result.affectedRows);
    console.log(rowIds);
    */
    var objectArray = ['name', 'address'];

    /*var sql2 = "INSERT INTO students (name, address) VALUES ?";
    var values2 = [
        ['demian', 'demian@gmail.com'],
        ['john', 'john@gmail.com'],
        ['mark', 'mark@gmail.com'],
        ['pete', 'pete@gmail.com']
    ];
    con.query(sql2, [values2], function(err) {
        if (err) throw err;
        con.end();
    });
   //let sql = 'INSERT INTO ' + table + ' (' + keys.join(',') + ') VALUES ?';
    */
  });

});
