class Comment {
    constructor({ date, author, text, postId, commentId }) {
        this.date = date;
        this.author = author;
        this.text = text;
        this.postId = postId;
        this.commentId = commentId;
    }
}

module.exports = Comment;
