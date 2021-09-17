const Book = require("./book");
const Author = require("./author");

test("books should have an author", () => {
    const testAuthor = new Author({ name: "name", yearOfBirth: "2021" });
    const book = new Book({ title: "book", author: testAuthor });
    expect(book.author).toBe(testAuthor);
    expect(book.author).toBeInstanceOf(Author);
});

test("books should have a title", () => {
    const testAuthor = new Author({ name: "name", yearOfBirth: "2021" });
    const book = new Book({ title: "book", author: testAuthor });
    expect(book.title).toBe("book");
});

test("books should have a latestEdition", () => {
    const testAuthor = new Author({ name: "name", yearOfBirth: "2021" });
    const book = new Book({ title: "book", author: testAuthor });
    expect(book._latestEdition).toBe(1);
});

test("books should have a newEdition to incrememnt latestEdition", () => {
    const testAuthor = new Author({ name: "name", yearOfBirth: "2021" });
    const book = new Book({ title: "book", author: testAuthor });
    expect(book._latestEdition).toBe(1);
    book.newEdition();
    expect(book._latestEdition).toBe(2);
});

