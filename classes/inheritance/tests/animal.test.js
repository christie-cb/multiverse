const Animal = require("../animal");
const groups = require("../groups");

test("animal contains group", () => {
    const animal = new Animal({ group: groups.MAMMALS, species: "Lion" });
    expect(animal.group).toBe(groups.MAMMALS);
});

test("animal contains species", () => {
    const speciesString = "Tiger";
    const animal = new Animal({ group: groups.MAMMALS, species: speciesString });
    expect(animal.species).toBe(speciesString);
})

test("animal lives on earth", () => {
    const animal = new Animal({ group: groups.MAMMALS, species: "Tiger" });
    expect(animal.homePlanet).toBe("Earth");
})
