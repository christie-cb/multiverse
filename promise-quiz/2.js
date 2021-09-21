const { readFile } = require("fs/promises");

async function whatever() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    console.log(response);
}

whatever();

// Prediction: fox
// Answer: correct 
