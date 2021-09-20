const ForumPage = require("../forum-page");

test("forum page contains title and page id", () => {
    const titleString = "test title";
    const idString = "_test";
    const forumPage = new ForumPage(title: titleString, pageId: idString);
    expect(forumPage.title).toBe(titleString);
    expect(forumPage.pageId).toBe(idString);
});
