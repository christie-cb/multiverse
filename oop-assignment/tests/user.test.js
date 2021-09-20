const User = require("../user");

test("User includes username and user id", () => {
    const username = "username";
    const testId = "_user";
    const user = new User({ username: username, userId: testId });
    expect(user.username).toBe(username);
    expect(user.userId).toBe(testId);
});
