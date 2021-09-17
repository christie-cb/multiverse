function sumOfOdd(numArray) {
    let output = 0;
    numArray.forEach((num) => {
        if (num % 2 != 0) {
            output = output + num;
        }
    });
    return output;
}

module.exports = sumOfOdd;
