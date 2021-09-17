const Book = require("./book");
const Author = require("./author");

const shakey = new Author({ name: "shakey", yearOfBirth: "1564" });
const hamlet = new Book({ title: "Hamlet", author: shakey });
const tempest = new Book({
    title: "The Tempest",
    author: shakey,
});

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Who are you?", (name) => {
    console.log(`Hey there ${name}!`);
    readline.question("What do you wanna read?", (name) => {
        let book = new Book({
            title: name,
            author: undefined,
        });
        console.log(book);
        readline.close();
    });
});
