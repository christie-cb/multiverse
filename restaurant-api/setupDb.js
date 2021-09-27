const Company = require("./models/company");
const Location = require("./models/location");
const db = require("./db");

async function setupDb() {
    // Locations and menus both belong to a particular company.
    Company.hasMany(Location);
    Location.belongsTo(Company, { foreignKey: "CompanyId" });
    await db.sync({ force: true, logging: console.log });
}

module.exports = setupDb;
