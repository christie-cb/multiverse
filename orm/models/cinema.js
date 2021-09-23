const sequelize = require("../db");
const { DataTypes, Model } = require("sequelize");

class Cinema extends Model {}

Cinema.init(
    {
        location: DataTypes.STRING,
        screenCount: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "Cinema",
        timestamps: false,
    }
);

module.exports = Cinema;
