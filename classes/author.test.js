const Author = require("./author");

test("authors should have a name", () => {
    const authorName = "name";
    const testAuthor = new Author({ name: authorName, yearOfBirth: "2021" });
    expect(testAuthor.name).toBe(authorName);
});

test("authors should have a year of birth", () => {
    const authorName = "name";
    const birthYear = "2021";
    const testAuthor = new Author({ name: authorName, yearOfBirth: birthYear });
    expect(testAuthor.yearOfBirth).toBe(birthYear);
});


