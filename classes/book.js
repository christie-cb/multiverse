class Book {
    constructor({ title, author, latestEdition }) {
        this.title = title;
        this.author = author;
        this.latestEdition = latestEdition;
    }
    newEdition() {
        this.latestEdition += 1;
    }
}

//const hamlet = new Book({title: "Hamlet", author: "Shakey", latestEdition: 1});
//console.log(hamlet);
//hamlet.newEdition();
//console.log(hamlet);

module.exports = Book;
