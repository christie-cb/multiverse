const Menu = require("../models/menu");
const Company = require("../models/company");

const app = require("../app");
const request = require("supertest");
const setupDb = require("../setupDb");
const seedTestData = require("./utils");

beforeEach(async () => {
    await setupDb(true);
    await seedTestData();
});

describe("POST request integration tests", () => {
    test("create company", async () => {
        const sentData = { name: "test company", logoUrl: "https://.com" };
        const response = await request(app).post("/companies").send(sentData);
        const companyId = response.body.id;
        const company = await Company.findOne({ where: { id: companyId } });
        expect(company).toBeInstanceOf(Company);
        expect(company.name).toBe(sentData.name);
    });

    test("create menu", async () => {
        const sentData = { title: "test menu" };
        const randomCompany = await Company.findOne();
        const response = await request(app)
            .post(`/companies/${randomCompany.id}/menus`)
            .send(sentData);
        const menuId = response.body.id;
        const menu = await Menu.findOne({ where: { id: menuId } });
        console.log(menu);
        expect(menu).toBeInstanceOf(Menu);
        expect(menu.title).toBe(sentData.title);
    });
});

describe("DELETE request integration tests", () => {
    test("delete created company", async () => {
        const randomCompany = await Company.findOne();
        const companyId = randomCompany.id;
        await request(app).delete(`/companies/${companyId}`).expect(204);
        Company.count({ where: { id: companyId } }).then((count) =>
            expect(count).toBe(0)
        );
    });

    test("delete created menu", async () => {
        const randomMenu = await Menu.findOne();
        const menuId = randomMenu.id;
        await request(app).delete(`/menus/${menuId}`).expect(200);
        Menu.count({ where: { id: menuId } })
            .then((count) => expect(count).toBe(0))
            .catch((error) => expect(error).toBe(null));
    });
});
