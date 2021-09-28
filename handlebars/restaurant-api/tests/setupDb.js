const Company = require("./models/company");
const Menu = require("./models/menu");
const Location = require("./models/location");
const db = require("./db");

async function setupDb(test = false) {
    // Locations and menus both belong to a particular company.
    Company.hasMany(Location);
    Company.hasMany(Menu);

    Location.belongsTo(Company, { foreignKey: "CompanyId" });
    Menu.belongsTo(Company, { foreignKey: "CompanyId" });
    if (test) {
        await db.sync({ force: true, logging: false });
    } else {
        await db.sync();
    }
}

module.exports = setupDb;
