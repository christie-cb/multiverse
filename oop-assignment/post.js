const { v4: uuidv4 } = require("uuid");
const Comment = require("./comment");

class Post {
    constructor({ title, date, author, text, pageId, postId }) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.text = text;
        this.pageId = pageId;
        this.postId = postId;
    }

    addComment({ text, author }) {
        return new Comment({
            text: text,
            date: Date(Date.now()),
            author: author,
            postId: this.postId,
            commentId: uuidv4(),
        });
    }
}

module.exports = Post;
