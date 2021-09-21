class Post {
    constructor({ title, author, text, pageId, postId }) {
        this.title = title;
        this.date = new Date(Date.now());
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
