const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Screening extends Model {}

Screening.init(
    {
        startTime: DataTypes.DATE,
        screenNumber: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "Screening",
        timestamps: false,
    }
);

module.exports = Screening;
