const Comment = require("../comment");
const User = require("../user");

test("Comment has date, author, text", () => {
    const date = Date(Date.now());
    const author = new User({ username: "name", userId: "_user" });
    const text = "wow";
    const comment = new Comment({ date: date, author: author, text: text });
    expect(comment.date).toBe(date);
    expect(comment.author).toBe(user);
    expect(comment.text).toBe(text);
});
