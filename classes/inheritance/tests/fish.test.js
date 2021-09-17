const Fish = require("../fish");
const groups = require("../groups");

test("Fish can swim", () => {
    const fish = new Fish(0, 0);
    expect(fish.posX).toBe(0);
    fish.swimForward();
    expect(fish.posX).toBe(1);
    expect(fish.posY).toBe(1);
});

test("Fish belong to group fish", () => {
    const fish = new Fish(0, 0);
    expect(fish.group).toBe(groups.FISH);
});
