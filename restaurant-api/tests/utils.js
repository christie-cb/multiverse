const Company = require("../models/company");
const Menu = require("../models/menu");
const Location = require("../models/location");

async function seedTestData() {
    const company1 = await Company.create({
        name: "company1",
        logoUrl: "https://picsum.photos/100",
    });
    const company2 = await Company.create({
        name: "company2",
        logoUrl: "https://picsum.photos/100",
    });

    const menu1 = await Menu.create({ title: "Christmas", CompanyId: company1.id });

    company1.addMenu(menu1);
    const menu2 = await Menu.create({ title: "Drinks" , CompanyId: company2.id });
    company2.addMenu(menu2);
}

module.exports = seedTestData;
