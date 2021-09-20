const Post = require("../post");
const User = require("../user");

test("post has title, author, date, text", () => {
    const params = {
        title: "title",
        author: new User({ username: "user", userId: "_user" }),
        date: Date(Date.now()),
        text: "hello world",
        postId: "_post",
        pageId: "_page",
    };
    const post = new Post({
        title: params.title,
        author: params.author,
        date: params.date,
        text: params.text,
        postId: params.postId,
        pageId: params.pageId,
    });
    Object.keys(params).forEach((key) => {
        expect(post[key]).toBe(params[key]);
    });
});
