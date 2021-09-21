const Post = require("./post");

class Poll extends Post {
    constructor({ question, options, title, author, text }) {
        super({ title, author, text });
        this.question = question;
        this.options = options;
        this.votes = { A: 0, B: 0, C: 0, D: 0 };
    }

    vote(optionLetter) {
        this.votes[optionLetter]++;
    }
}

class Options {
    // Users can add at least 2 and at most 4 options.
    constructor(A, B, C = null, D = null) {
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }
}

module.exports = { Poll, Options };
