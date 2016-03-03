// no require module is needed

var buf10size = new Buffer(10); // create a buffer with 10 bytes

var bufArray = new Buffer([10, 20, 30, 40, 50]); // create a buffer of 5 elements passed on array

var bufString = new Buffer("Hello World on buffer!", "utf-8"); // create a buffer with a string utf-8 encoded

var bufToWriteAndRead = new Buffer(256); // create a empty buffer with 256 bytes
len = bufToWriteAndRead.write("Hello"); // write on buffer, return count of bytes writed
console.log("Octets written: " + len);
len = bufToWriteAndRead.write("World"); // write on buffer
console.log("Octets written: " + len);
console.log( bufToWriteAndRead.toString('ascii') ); // read from buffer and ascii encode, it can prints some garbage
console.log( bufToWriteAndRead.toString('ascii', 0, 5) ); // read from buffer from 0th to 5th byte and ascii encode
console.log( bufToWriteAndRead.toString('utf8', 0, 5) ); // read from buffer from 0th to 5th byte and utf8 encode
console.log( bufToWriteAndRead.toString(undefined, 0, 5) ); // read from buffer from 0th to 5th byte and ascii encode

var bufToJSON = new Buffer("This is JSON");
var json = bufToJSON.toJSON(bufToJSON); // convert a Node Buffer into JSON object

console.log(json);

var bufferPart1 = new Buffer("This");
var bufferPart2 = new Buffer(" is");
var bufferPart3 = new Buffer(" Sparta!");

var bufferConcatened = Buffer.concat([bufferPart1, bufferPart2, bufferPart3]); // concatenate buffers list

console.log(bufferConcatened.toString());

var bufBefore = new Buffer('ABC');
var bufAfter = new Buffer('ABCD');
var result = bufBefore.compare(bufAfter); // compare the 2 buffers, returns negative to before, positive to after and zero to equal value buffers
console.log("comparation order: " + result);


var bufSource = new Buffer('ABC');
var bufTarget = new Buffer(3);
bufSource.copy(bufTarget); // copy buffer1 to target buffer2
console.log("Target buffer content: " + bufTarget.toString());

var bufToSlice = new Buffer("David Kennedy S Araujo");
var bufSlicedPart = bufToSlice.slice(6,12); // slice a buffer into desired part
console.log("Sliced part: " + bufSlicedPart.toString());
