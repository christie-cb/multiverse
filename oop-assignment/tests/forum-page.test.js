const ForumPage = require("../forum-page");
const User = require("../user");
const Post = require("../post");
const getTestPost = require("./utils");

test("forum page contains title and page id", () => {
    const titleString = "test title";
    const idString = "_test";
    const forumPage = new ForumPage({ title: titleString, pageId: idString });
    expect(forumPage.title).toBe(titleString);
    expect(forumPage.pageId).toBe(idString);
});

test("forum page can add post", () => {
    const username = "username";
    const testId = "_user";
    const user = new User({ username: username, userId: testId });
    const forumPage = new ForumPage({ title: "test title", pageId: "_test" });
    const post = getTestPost();
    expect(forumPage.posts.length).toBe(0);
    forumPage.addPost(post);
    expect(forumPage.posts.length).toBe(1);
    expect(forumPage.posts[0]).toBe(post);
});
