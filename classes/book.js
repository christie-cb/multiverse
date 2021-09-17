class Book {
    constructor({ title, author }) {
        this.title = title;
        this.author = author;
        this._latestEdition = 1;
    }
    newEdition() {
        this._latestEdition++;
    }
}

const hamlet = new Book({title: "Hamlet", author: "Shakey", latestEdition: 1});
console.log(hamlet);
hamlet.newEdition();
console.log(hamlet);

module.exports = Book;
