const ForumPage = require("./forum-page");
const Post = require("./post");
const Comment = require("./comment");
const User = require("./user");

const author = new User({ username: "ccb", userId: "_user" });
const newPost = new Post({
    title: "First post",
    author: author,
    text: "long text",
});
const page = new ForumPage({ title: "Page", pageId: "1" });
console.log(page.posts);
page.addPost(newPost);
console.log(page.posts);

const secondPost = new Post({
    title: "Second post",
    author: author,
    text: "short text",
});
page.addPost(secondPost);
console.log(page.posts);

const newComment = new Comment({
    title: "great content",
    author: author,
    text: "👍",
});
secondPost.addComment(newComment);
console.log(page.posts);
