const { Sequelize } = require("sequelize");
const path = require("path");

const dbPath = path.join(__dirname, "cinema_db.sqlite");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: dbPath, // Don't use relative path
});

module.exports = sequelize;
