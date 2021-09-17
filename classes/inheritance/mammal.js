const groups = require("./groups");
const Animal = require("./animal");

class Mammal extends Animal {
    constructor({ species, coat }) {
        super({ group: groups.MAMMALS, species: species });
        this.coat = coat;
    }
}

module.exports = Mammal;
