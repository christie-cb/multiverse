const { readFile } = require("fs/promises");
console.log(readFile("./animal.txt"));

// Prediction: Returns a promise{ file } 
// Answer: promise{ pending } 
