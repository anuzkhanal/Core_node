const path = require("path");

//BAse file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extemsion
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

//concatanate path

console.log(path.join(__dirname, "test", "hello.html"));
