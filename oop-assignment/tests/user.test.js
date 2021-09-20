const User = require("../user");
const Post = require("../post");

test("User includes username and user id", () => {
    const username = "username";
    const testId = "_user";
    const user = new User({ username: username, userId: testId });
    expect(user.username).toBe(username);
    expect(user.userId).toBe(testId);
});

test("User includes username and user id", () => {
    const username = "username";
    const testId = "_user";
    const user = new User({ username: username, userId: testId });
    const post = user.createPost({ title: "title", text: "txt", pageId: "id" });
    expect(post).toBeInstanceOf(Post);
    expect(post.author).toBe(user);
});
