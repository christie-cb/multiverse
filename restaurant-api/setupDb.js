const Company = require("./models/company");

const db = require("./db");

async function setupDb() {
    // Locations and menus both belong to a particular company.
    // Company.hasMany(locations)
    // Location.belongsTo(Company)
    await db.sync({ force: true, logging: console.log });
}

module.exports = setupDb;
