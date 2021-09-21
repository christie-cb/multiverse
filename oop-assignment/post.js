class Post {
    constructor({ title, author, text }) {
        this.title = title;
        this.date = new Date(Date.now());
        this.author = author;
        this.text = text;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

module.exports = Post;
