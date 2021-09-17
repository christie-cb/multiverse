const sumOfOdd = require("./sumOfOdd")

test("sumOfOdd correctly sums odd numbers", () => {
    let input = [1, 7, 2];
    let sum = sumOfOdd(input);
    expect(sum).toBe(8);
});

test("sumOfOdd can return zero", () => {
    let input = [];
    expect(sumOfOdd(input)).toBe(0);

    let evenInput = [2];
    expect(sumOfOdd(evenInput)).toBe(0);
});
