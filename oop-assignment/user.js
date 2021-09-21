const Post = require("./post");

class User {
    constructor({ username, userId }) {
        this.username = username;
        this.userId = userId;
    }
}

module.exports = User;
