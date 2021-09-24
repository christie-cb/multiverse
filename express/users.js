const express = require("express");
const { v4: uuidv4 } = require('uuid');


const path = require("path");

const app = express();
app.use(express.json());

const users = {
    uid1: { name: "daisy", age: 54 },
    uid2: { name: "jo", age: 34 },
};

app.get("/users/:userId", (req, res) => {
    res.send(users[req.params.userId]);
});

app.post("/users", (req, res) => {
    console.log(req.body);
    const uid = uuidv4();
    users[uid] = req.body;
    console.log(users);
    res.send(req.body);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
