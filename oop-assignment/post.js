class Post {
    constructor({ title, date, author, text, pageId, postId }) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.text = text;
        this.pageId = pageId;
        this.postId = postId;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

module.exports = Post;
