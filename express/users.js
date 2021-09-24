const express = require("express");
const path = require("path");

const app = express();
const users = {
    uid1: { name: "daisy", age: 54 },
    uid2: { name: "jo", age: 34 },
};

app.get("/users/:userId", (req, res) => {
    res.send(users[req.params.userId]);
});

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
