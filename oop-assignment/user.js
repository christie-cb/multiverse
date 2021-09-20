const Post = require("./post");
const { v4: uuidv4 } = require("uuid");

class User {
    constructor({ username, userId }) {
        this.username = username;
        this.userId = userId;
    }

    createPost(title, text) {
        return new Post({
            title: title,
            text: text,
            date: Date(Date.now()),
            author: this,
            pageId: uuidv4(),
            postId: uuidv4(),
        });
    }
}

module.exports = User;
