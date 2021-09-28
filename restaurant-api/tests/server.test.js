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

describe("GET requests", () => {
    test("get all companies", function (done) {
        request(app)
            .get("/companies")
            .expect(200)
            .then((response) => {
                expect(response.body[0].name).not.toBe(null);
                done();
            })
            .catch((err) => done(err));
    });

    test("get company by ID", async () => {
        const response = await request(app).get("/companies/21");
        expect(response.statusCode).toBe(200);
    });

    test("get company menus by company ID", async () => {
        const response = await request(app).get("/companies/1/menus");
        expect(response.statusCode).toBe(200);
    });

    test("get all menus", async () => {
        const response = await request(app).get("/menus");
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBe(undefined);
    });

    test("get menu by menu ID", async () => {
        const response = await request(app).get("/menus/1");
        expect(response.statusCode).toBe(200);
    });
});

describe("POST requests", () => {
    test("create new company", function (done) {
        const sentData = { name: "test name" };
        request(app)
            .post("/companies")
            .send(sentData)
            .expect(200)
            .then((response) => {
                expect(response.body.name).toBe(sentData.name);
                done();
            })
            .catch((err) => done(err));
    });
});

describe("DELETE requests", () => {
    test("delete created company", function (done) {
        Company.findOne().then((company) => {
            request(app).delete(`/companies/${company.id}`).expect(200, done);
        });
    });

    test("delete created menu", function (done) {
        Menu.findOne().then((menu) => {
            request(app).delete(`/menus/${menu.id}`).expect(200, done);
        });
    });
});
