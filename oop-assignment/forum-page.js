class ForumPage {
    constructor({ title, pageId }) {
        this.title = title;
        this.pageId = pageId;
        this.posts = [];
    }

    addPost(post) {
        this.posts.push(post);
    }
}

module.exports = ForumPage;
