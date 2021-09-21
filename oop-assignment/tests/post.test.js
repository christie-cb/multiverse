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

test("post can add comment", () => {
    const post = getTestPost();
    expect(post.comments.length).toBe(0);
    const comment = new Comment({ text: "first", title: "", date: Date(Date.now()), author: post.author, postId: "", commentId: "" })
    post.addComment(comment);
    expect(post.comments.length).toBe(1);
    expect(post.comments[0].text).toBe(comment.text);
    
    const nextComment = new Comment({ text: "second", author: post.author });
    post.addComment(nextComment);
    expect(post.comments.length).toBe(2);
    expect(post.comments[1].text).toBe(nextComment.text);
})

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
