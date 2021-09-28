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
        const createdCompany = await Company.findByPk(companyId);
        expect(createdCompany).not.toBe(undefined);
        // test
        const deleteResponse = await request(app).delete(
            `/companies/${companyId}`
        );
        const deletedCompany = await Company.findByPk(companyId);
        console.log(deletedCompany);
        Company.count({ where: { id: companyId } }).then((count) =>
            expect(count).toBe(0)
        );
    });

    test("delete created company", function (done) {
        // setup
        request(app)
            .post("/companies")
            .send({ name: "delete company test" })
            .then((response) => {
                const companyId = response.body.id;
                const createdCompany = Company.findByPk(companyId);
                expect(createdCompany).not.toBe(undefined);
                // test
                request(app)
                    .delete(`/companies/${companyId}`)
                    .expect(200, done);
            })
            .catch((err) => done(err));
    });

    test("delete created menu", function (done) {
        // setup
        const sentData = { title: "bread" };
        request(app)
            .post("/menus")
            .send(sentData)
            .then((response) => {
                // test
                const createdMenu = Menu.findAll({
                    where: { id: response.body.id },
                });
                console.log(`CREATEDMENU: ${createdMenu}`);
                expect(createdMenu).not.toBe(undefined);
                request(app)
                    .delete(`/menus/${response.body.id}`)
                    .expect(200)
                    .then((delResponse) => {
                        const deletedMenu = Menu.findAll({
                            where: { id: response.body.id },
                        });
                        expect(createdMenu).toBe(undefined);
                        done();
                    });
            })
            .catch((err) => done(err));
    });
});
