const Post = require("../post");
const User = require("../user");
const Comment = require("../comment");
const getTestPost = require("./utils");

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

test("posts can be deleted by their author", () => {
    const post = getTestPost();
    // set current user to be post.author
    const user = post.author;
    post.remove({ byUser: user });
    // post should be undefined i.e. successfully deleted
    expect(post).toBe(undefined);
    const newPost = getTestPost();
    // set current user to be unauthorised to delete
    const unauthorisedUser = User({
        username: "unauth",
        userId: "_other_user",
    });
    newPost.remove({ byUser: unauthorisedUser });
    // newPost should not be undefined
    expect(newPost).not.toBe(undefined);
});

test("can add comments to post", () => {
    const post = new Post({
        title: "title",
        author: new User({ username: "user", userId: "_user" }),
        date: Date(Date.now()),
        text: "hello world",
        postId: "_post",
        pageId: "_page",
    });
    const comment = post.addComment("fantastic");
    expect(comment).toBeInstanceOf(Comment);
    expect(comment.postId).toBe(post.postId);
});
