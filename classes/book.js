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

module.exports = Book;
