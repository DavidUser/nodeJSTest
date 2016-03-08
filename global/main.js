console.log("file name: " + __filename);
console.log("directory name: " + __dirname);

function sayHello() {
	console.log("Hello, World!");
}

console.log("Here 2 seconds, I'll say hello...");
var helloTimer = setTimeout( sayHello, 2000);
// timer stoped, no one Hello will be said
clearTimeout(helloTimer);
// set a new timer, say hello 4 seconds ago
helloTimer = setInterval(sayHello, 4000); // setInterval works like setTimeout
