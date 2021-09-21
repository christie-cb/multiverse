const { readFile } = require("fs/promises");

async function readAnimal() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    return response;
}

const mvResponse = readAnimal();
console.log(mvResponse);

// Prediction: readAnimal returns Promise { fox }, so that's what we log
// Answer: it returned Promise { <pending> }. Even though what's inside the function pauses, 
// the code is still executed before waiting for the promise to resolve.
