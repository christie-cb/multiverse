const Animal = require("./animal");
const groups = require("./groups");

class Fish extends Animal {
    constructor(posX, posy) {
        super({ groups: groups.FISH, species: "Goldfish" });
        this.posX = posX;
        this.posY = posY;
    }

    swimForward() {
        this.posX++;
    }
}

module.exports = Fish
