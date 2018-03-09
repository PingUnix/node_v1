var mysql = require('mysql');
var fs = require('fs');

//connect a database server
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'mydb'}
);

//*1. json object handling


//this is a json object , person 
var person = { "name":"John", "age":31, "city":[
    {"nm":"New York", "code":"NY","price":1000},
    {"nm":"LA", "code":"LA", "price":150}] 
};

//access . modify , delete  the object 
console.log("person inform :" + person.name);
person.name = 'tianya';
console.log("person inform :" + person.name);
//delete property
delete person.name;
console.log("person inform :" + person.name);

//this is an array of json object 
var persons = [
    { "name":"John", "age":31, "city":[
        {"nm":"New York", "code":"NY","price":1000},
        {"nm":"LA", "code":"LA", "price":150}] 
    },
    { "name":"wi", "age":31, "city":[
        {"nm":"New York", "code":"NY","price":1000},
        {"nm":"LA", "code":"LA", "price":150}] 
    },
    { "name":"don", "age":31, "city":[
        {"nm":"New York", "code":"NY","price":1000},
        {"nm":"LA", "code":"LA", "price":150}] 
    }
];

//access array values
console.log("2nd person 's age : " + persons[1].age);

//loop through the array

for (x in persons){

    for(y in persons[x].city)
        console.log(persons[x].city[y].price + " --- log file ");
}
//**2. string to js object */
//When receiving data from a web server, the data is always a string, such as sample.json
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//from the json file ( string ) to java script object 
fs.readFile('./sample.json',
    // callback function that is called when reading file is done
    function(err, data) {        
        // data is the buffered data;
        // parse  the buffered data into js object
        var jsonParsed = JSON.parse(data);
        //access the object 
        console.log("access the JS object --  " + jsonParsed.courses[0].name);


});

//customize the convertion from string to js object

var text = '{"persons":[{ "name":"John", "birth":"1993-12-14", "city":"New York"},{ "name":"John", "birth":"1986-12-14", "city":"New York"}]}';
var obj = JSON.parse(text);

var dob = new Date(obj.persons[0].birth).getFullYear();


console.log(dob);//birth is a string 

//you can customize a conversion of birth day ,using reviver

var obj_c = JSON.parse(text, function (key, value) {
    if (key == "birth") {
        return "haha";
    } else {
        return "hihi";
    }
});

console.log("cusotmer conver is " + obj_c);


//send data to a web server, the data should be a string
var obj_j = { "name":"John", "age":30, "city":"New York"};

var str = JSON.stringify(obj);

console.log("new string is : "  + str);
console.log("new string is : "  + str);
var str_a = JSON.stringify(text);


/*conn.query('INSERT INTO `test_db` (`column_name`) VALUES(?)', [str], function (err) {
  if (err) throw err;
  conn.query('SELECT * FROM `test_db` LIMIT 1;', function (err, rows) {
    if (err) throw err;
    console.log(JSON.parse(rows[0].column_name));
    conn.end();
  });
})*/

