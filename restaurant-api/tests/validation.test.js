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

describe("POST request validation tests", () => {
    test("unsuccessfully create company", function (done) {
        const incorrectData = { key: "value", logoUrl: "https://blah.com" };
        request(app)
            .post("/companies")
            .send(incorrectData)
            .expect(400)
            .then((response) => {
                expect(response.error.text.includes("name")).toBeTruthy();
                done();
            })
            .catch((err) => done(err));
        const otherIncorrectData = { name: "value" };
        request(app)
            .post("/companies")
            .send(otherIncorrectData)
            .expect(400)
            .then((response) => {
                expect(response.error.text.includes("logoUrl")).toBeTruthy();
                done();
            })
            .catch((err) => done(err));

    });

    test("unsuccessfully create menu", async () => {
        const randomCompany = await Company.findOne();
        const incorrectData = { key: "value" };
        const response = await request(app)
            .post(`/companies/${randomCompany.id}/menus`)
            .send(incorrectData)
            .expect(400);
        expect(response.error.text.includes("title")).toBeTruthy();
    });
});
