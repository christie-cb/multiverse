const Database = require("../database");
const User = require("../user");

test("database loads data from json file", () => {
    const db = new Database();
    expect(db.data).not.toBe(undefined);
});

test("database can add a new user", () => {
    const db = new Database();
    const userId = "_test_user";
    const username = "test";
    const user = new User({ username: username, userId: userId });
    db.addUser(user);
    expect(db.data["users"][userId]).toEqual({ "username": username }); 
});
