const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile('index.html');
});

app.get("/flipcoin", (req, res) => {
    const randomInt = Math.floor(Math.random() * 10);
    const isEven = (randomInt % 2 === 0);
    res.send(isEven ? "heads" : "tails");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
