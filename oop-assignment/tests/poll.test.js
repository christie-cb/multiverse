const { Poll, Options } = require("../poll");
const Post = require("../post");
const User = require("../user");

test("poll inherits from post", () => {
    const author = new User({ username: "user", userId: "_user" });
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({
        options: options,
        title: "scone or scone",
        author: author,
        text: "hello world",
    });
    expect(poll.author).toBe(author);
    expect(poll).toBeInstanceOf(Post);
    expect(poll.date).toBeInstanceOf(Date);
});

test("poll includes options", () => {
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({ title: "Scone or scone?", options: options });
    expect(poll.options).toBe(options);
});

test("can vote on poll", () => {
    const options = new Options({ A: "scone", B: "definitely scone" });
    const poll = new Poll({ title: "Scone or scone?", options: options });
    expect(poll.votes.A).toBe(0);
    expect(poll.votes.B).toBe(0);
    poll.vote("A");
    expect(poll.votes.A).toBe(1);
    expect(poll.votes.B).toBe(0);
    poll.vote("B");
    expect(poll.votes.A).toBe(1);
    expect(poll.votes.B).toBe(1);
});
