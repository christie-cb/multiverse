const Animal = require("../animal");

test("animal contains group", () => {
    const mammalString = "Mammal";
    const animal = new Animal({ group: mammalString, species: "Lion" });
    expect(animal.group).toBe(mammalString);
});

test("animal contains species", () => {
    const speciesString = "Tiger";
    const animal = new Animal({ group: "Mammal", species: speciesString });
    expect(animal.species).toBe(speciesString);
})

test("animal lives on earth", () => {
    const animal = new Animal({ group: "Mammal", species: "Tiger" });
    expect(animal.homePlanet).toBe("Earth");
})
