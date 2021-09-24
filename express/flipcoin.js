const express = require("express");

const app = express();
const port = 3000;

app.get("/flipcoin", (req, res) => {
    const randomInt = Math.floor(Math.random() * 10);
    const isEven = (randomInt % 2 === 0);
    res.send(isEven ? "heads" : "tails");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
