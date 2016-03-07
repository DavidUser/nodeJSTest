var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt') // create a read stream
	.pipe(zlib.createGzip()) // create a gzip compress handle and pipe to that, put plain chars
	.pipe(fs.createWriteStream('input.txt.gz')); // create a write stream and pipe the compressed stream, put unzipped chars on file

console.log("File Compressed.");
