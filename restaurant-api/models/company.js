const sequelize = require("../db");
const { DataType, Model, DataTypes } = require("sequelize");

class Company extends Model {}

Company.init(
    {
        name: DataTypes.STRING,
        logoUrl: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "Company",
        timestamps: false,
    }
);

module.exports = Company;
