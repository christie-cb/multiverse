const Location = require("../models/location");
const Company = require("../models/company");
const setupDb = require("../setupDb");

beforeAll(async () => {
    await setupDb();
});

test("location has a name, capacity and manager", async () => {
    const name = "Gloucester";
    const manager = "Bob";
    const loc = await Location.create({
        name,
        capacity: 100,
        manager,
    });

    expect(loc).toBeInstanceOf(Location);
    expect(loc.name).toBe(name);
    expect(loc.manager).toBe(manager);
    await Location.destroy({ where: { id: loc.id } });
});

test("location is associated with a company.", async () => {
    const name = "Gloucester";
    const manager = "Bob";
    const company = await Company.create({
        name: "Test",
        imageUrl: "https://cool-url.com/",
    });
    const loc = await Location.create({
        name,
        capacity: 100,
        manager,
        CompanyId: company.id,
    });

    expect(loc.CompanyId).toBe(company.id);
    await Company.destroy({ where: { id: company.id } });
    await Location.destroy({ where: { id: loc.id } });
});
