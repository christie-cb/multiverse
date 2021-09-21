const { readFile } = require("fs/promises");

async function readAnimal() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    return response;
}

// complete this line
readAnimal().then((resp) => {
    console.log(resp);
});
