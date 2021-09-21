const Post = require("../post");
const User = require("../user");

function getTestPost() {
    return new Post({
        title: "title",
        author: new User({ username: "user", userId: "_user" }),
        date: Date(Date.now()),
        text: "hello world",
        postId: "_post",
        pageId: "_page",
    });
}

module.exports = getTestPost;
