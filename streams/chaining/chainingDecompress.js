var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz') // create a read stream
	.pipe(zlib.createGunzip()) // create a gzip unzipper handle and pipe to that, put compressed chars
	.pipe(fs.createWriteStream('input.txt')); // create a write stream and pipe the uncompressed stream, put uncompressed chars on file

console.log("File Decompressed.");
