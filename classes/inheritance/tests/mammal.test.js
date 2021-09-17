const Mammal = require("../mammal");
const groups = require("../groups");

test("Mammal has coat", () => {
    const fur = "Fur";
    const mammal = new Mammal({ coat: fur, species: "Polar Bear" });
    expect(mammal.coat).toBe(fur);
});

test("Mammal's group is mammal", () => {
    const mammal = new Mammal({ coat: "Hair", species: "Monkey" });
    expect(mammal.group).toBe(groups.MAMMALS);
});
