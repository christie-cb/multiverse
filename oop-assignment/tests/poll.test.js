const { Poll, Options } = require("../poll");
const Post = require("../post");
const User = require("../user");

test("poll inherits from post", () => {
    const author = new User({ username: "user", userId: "_user" });
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({
        question: "scone or scone",
        options: options,
        title: "title",
        author: author,
        text: "hello world",
        postId: "_post",
        pageId: "_page",
    });
    expect(poll.author).toBe(author);
    expect(poll).toBeInstanceOf(Post);
});

test("poll includes options", () => {
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({ question: "Scone or scone?", options: options });
    expect(poll.options).toBe(options);
});

test("can vote on poll", () => {
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({ question: "Scone or scone?", options: options });
    expect(poll.votes.A).toBe(0);
    expect(poll.votes.B).toBe(0);
    poll.vote("A");
    expect(poll.votes.A).toBe(1);
    expect(poll.votes.B).toBe(0);
    poll.vote("B");
    expect(poll.votes.A).toBe(1);
    expect(poll.votes.B).toBe(1);
});
