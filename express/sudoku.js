//const express = require("express");
//
//const app = express();
//app.use(express.json());

function sudoku(puzzleJson) {
    // Example uncompleted Sudoku:
    // {column: {row: value}}
    // {"A": {1: 5, 3: 2}}
    const allRows = getEmptyAllRows();
    // Ok so I'm thinking
    // We go thru every column and see what's inside. Push to an array.
    // Go thru every row and do the same.
    // Now, while loop through their solutions. We cross check the rows & columns. We can use, like a count of solutions to see whether it's filled.
    const allColumns = getEmptyAllColumns();
    const enteredColumns = Object.keys(puzzleJson);
    enteredColumns.forEach((colKey) => {
        console.log(colKey);
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
    console.log(allRows);
    // Now go through puzzleJson. For each column, which rows are unfilled?
    // In that row, which numbers are missing?
    // When you find a number which is missing from both current row & current column, you put it in.
    // The only problem im kinda thinking is that it is bad practice to make a change to an array while you're looping through it soo
    enteredColumns.forEach((colKey) => {
        const filledRowKeys = Object.keys(puzzleJson[colKey]);
        const allRowKeys = Object.keys(allRows);
        const unfilledRows = allRowKeys.filter( x => !filledRowKeys.includes(x)) 
        unfilledRows.forEach((rowKey) => {
            console.log(rowKey);

        });
    });
}

function getEmptyAllRows() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const allRows = nums.reduce(function (obj, x) {
        obj[x] = [];
        return obj;
    }, {});
    return allRows;
}

function getEmptyAllColumns() {
    return {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
    };
}

sudoku({
    A: { 2: 6, 3: 1, 4: 8, 9: 7 },
    B: { 2: 8, 3: 9, 4: 2, 6: 5, 8: 4 },
    C: { 5: 4, 7: 9, 9: 3 },
});
