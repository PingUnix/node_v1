var fs = require('fs');
var event = require('events');

var eventEmitter = new event.EventEmitter();

var eventHandler = function(){
    console.log("hear a event, handle it?");
}

//assign a handler to an event
eventEmitter.on("switch", eventHandler);
//trigger the event;
eventEmitter.emit("switch");

var rs = fs.createReadStream('./person.txt');
rs.on('open', function () {
  console.log('The file is open');
});