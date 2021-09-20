const { Poll, Options } = require("../poll");
test("poll includes options", () => {
    const options = Options({A: "scone", B: "definitely scone"});
    const poll = new Poll({ question: "Scone or scone?", options: options });
    expect(poll.options).toBe(options);
});

test("can vote on poll", () => {
    const options = Options({A: "scone", B: "definitely scone"});
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
