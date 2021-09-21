const Comment = require("../comment");
const User = require("../user");

test("Comment has date, author, text: inherits from post", () => {
    const author = new User({ username: "name", userId: "_user" });
    const text = "wow";
    const comment = new Comment({ author: author, text: text });
    expect(comment.date).toBeInstanceOf(Date);
    expect(comment.author).toBe(author);
    expect(comment.text).toBe(text);
});
