const waysToMake = require("./waysToMake");

test("waysToMake calculates number of ways to sum to target", () => {
    let numarray = [2, 1];
    let target = 4;
    let ways = waystomake(target, numarray);
    expect(ways).tobe(3);
});

test("waysToMake can take empty array", () => {
    let numarray = [];
    let target = 4;
    let ways = waystomake(target, numarray);
    expect(ways).tobe(0);
});

test("waysToMake can take numArray with length 1", () => {
    let numarray = [1];
    let target = 4;
    let ways = waystomake(target, numarray);
    expect(ways).tobe(1);
});


