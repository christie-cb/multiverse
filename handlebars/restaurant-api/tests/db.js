const { Sequelize } = require("sequelize");
const path = require("path");

const dbPath =
    process.env.NODE_ENV === "test"
        ? ":memory:"//path.join(__dirname, "test_db.sqlite")
        : path.join(__dirname, "restaurant_db.sqlite");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath,
});

module.exports = sequelize;
