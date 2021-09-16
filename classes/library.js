const Book = require("./book");
const Author = require("./author");

const shakey = new Author({ name: "shakey", yearOfBirth: "1564" });
const hamlet = new Book({ title: "Hamlet", author: shakey, latestEdition: 1 });
console.log(hamlet);
hamlet.newEdition();
console.log(hamlet);

const tempest = new Book({
  title: "The Tempest",
  author: shakey,
  latestEdition: 1,
});

console.log(tempest);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Who are you?", (name) => {
  console.log(`Hey there ${name}!`);
  readline.question("What do you wanna read?", (name) => {
    let book = new Book({ title: name, author: undefined, latestEdition: 1 });
    console.log(book);
    readline.close();
  });
});
