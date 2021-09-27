const Menu = require("../models/menu");
const Company = require("../models/company");
const setupDb = require("../setupDb");

beforeAll(async () => {
    await setupDb();
});

test("menu has a title", async () => {
    const title = "Drinks";
    const menu = await Menu.create({ title });

    expect(menu).toBeInstanceOf(Menu);
    expect(menu.title).toBe(title);
    await Menu.destroy({ where: { id: menu.id } });
});

test("menu is associated with a company.", async () => {
    const company = await Company.create({
        name: "Test",
        imageUrl: "https://cool-url.com/",
    });
    const menu = await Menu.create({
        title: "Drinks",
        CompanyId: company.id,
    });

    expect(menu.CompanyId).toBe(company.id);
    await Company.destroy({ where: { id: company.id } });
    await menu.destroy({ where: { id: menu.id } });
});
