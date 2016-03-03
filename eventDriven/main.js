var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',
	function () {
		console.log('connection successful.');
		eventEmitter.emit('data_received');
	}
	);
eventEmitter.on('data_received',
	function () {
		console.log('data received successfully.');
	}
	);

eventEmitter.emit('connection');

console.log("Program Ended.");
