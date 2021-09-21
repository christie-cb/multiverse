const { readFile } = require("fs/promises");

console.log("hello");
readFile("./animal.txt", { encoding: "utf-8" }).then(console.log);
console.log("goodbye");

// Prediction: hello, goodbye, fox
// Answer: correct woo
