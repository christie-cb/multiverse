const app = require("../app");
const request = require("supertest");
const Menu = require("../models/menu");
const Company = require("../models/company");
const setupDb = require("../setupDb");

beforeAll(async () => {
    await setupDb();
});

describe("DELETE request integration tests", () => {
    test("delete created company", async () => {
        // setup
        const response = await request(app)
            .post("/companies")
            .send({ name: "delete company test" });
        const companyId = response.body.id;
        Company.count({ where: { id: companyId } }).then((count) =>
            expect(count).not.toBe(0)
        );

        // test
        await request(app).delete(`/companies/${companyId}`).expect(200);
        Company.count({ where: { id: companyId } }).then((count) =>
            expect(count).toBe(0)
        );
    });

    test("delete created menu", async () => {
        // setup
        const response = await request(app)
            .post("/menus")
            .send({ name: "delete menu test" });
        const menuId = response.body.id;
        Menu.count({ where: { id: menuId} }).then((count) =>
            expect(count).not.toBe(0)
        );
        // test
        await request(app).delete(`/menus/${menuId}`).expect(200);
        Menu.count({ where: { id: menuId } }).then((count) =>
            expect(count).toBe(0)
        );
    });
});
