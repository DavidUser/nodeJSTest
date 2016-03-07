var fs = require('fs');
var data = 'Simply Easy Learning';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finish', function() {
  console.log('Write completed');
});

writeStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("Program Ended");

