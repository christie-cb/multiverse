function sudoku(puzzleJson) {
    // Example uncompleted Sudoku:
    // {column: {row: value}}
    // {"A": {1: 5, 3: 2}}
    const allRows = getEmptyAllRows();
    const allColumns = getEmptyAllColumns();
    const enteredColumns = Object.keys(puzzleJson);
    enteredColumns.forEach((colKey) => {
        const entries = Object.values(puzzleJson[colKey]);
        allColumns[colKey].push(entries);
    });
    const rows = Object.values(puzzleJson);
    rows.forEach((obj) => {
        const rowKeys = Object.keys(obj);
        rowKeys.forEach((key) => {
            allRows[key].push(obj[key]);
        });
    });
    // loop thru solns
    enteredColumns.forEach((colKey) => {
        const unfilledRows = difference(
            Object.keys(allRows),
            Object.keys(puzzleJson[colKey])
        );
        const numsNotInColumn = difference(
            range(1, 9),
            Object.values(puzzleJson[colKey])
        );
        unfilledRows.forEach((rowSquare) => {
            // e.g. rowSquare = 1
            const numsNotInRow = difference(range(1, 9), allRows[rowSquare]);
            const possibleEntries = union(numsNotInRow, numsNotInColumn);

            // Show all possible entries for this square
            console.log({ colKey, rowSquare, possibleEntries });
        });
    });
}

const union = (arr1, arr2) => arr1.filter((x) => arr2.includes(x));

const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);

function getEmptyAllRows() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return objectComprehension(nums);
}

function getEmptyAllColumns() {
    const letters = [
      'A', 'B', 'C',
      'D', 'E', 'F',
      'G', 'H', 'I'
    ];
    return objectComprehension(letters);
}

function objectComprehension(keys) {
    const object = keys.reduce(function (obj, x) {
        obj[x] = [];
        return obj;
    }, {});
    return object;
}

sudoku({
    A: { 2: 6, 3: 1, 4: 8, 9: 7 },
    B: { 2: 8, 3: 9, 4: 2, 6: 5, 8: 4 },
    C: { 5: 4, 7: 9, 9: 3 },
    D: { 1: 2, 5: 1, 6: 6, 8: 3 },
    E: { 1: 6, 2: 7, 8: 5, 9: 1 },
    F: { 3: 4, 6: 2, 7: 3, 9: 8 },
    G: { 1: 7, 3: 5, 6: 9 },
    H: { 2: 9, 4: 4, 6: 2, 7: 7, 8: 3 },
    I: { 1: 1, 6: 8, 7: 4, 8: 6 },
});
