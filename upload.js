
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'tester@gmail',
        password:'1223'
    }
});

var mailoptions = {
    from:'tester@gmail',
    to:'another@yahoo.com',
    subject:'hello',
    text:'hewrwerwer'

};
transporter.sendMail(mailoptions,function(err, info){

    if(err) 
        console.log(err);
    else
        console.log("email send " + info.response);
});

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = '/Users/sandy/'+ files.filetoupload.name;
        fs.rename(oldpath, newpath, function(err){
            if(err) throw err;
            res.write('file uploaded and removed ');
            res.end();
        });
        
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);