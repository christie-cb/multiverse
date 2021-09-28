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
        const incorrectData = { key: "value" };
        request(app)
            .post("/companies")
            .send(incorrectData)
            .expect(500)
            .then((response) => {
                expect(response.body.message.includes("name")).toBeTruthy();
                expect(response.body.message.includes("logoUrl")).toBeTruthy();
                done();
            })
            .catch((err) => done(err));
    });

    test("unsuccessfully create menu", async () => {
        const randomCompany = await Company.findOne();
        const incorrectData = { key: "value" };
        const response = await request(app)
            .post(`/companies/${randomCompany.id}`)
            .send(incorrectData)
            .expect(500);
        expect(response.body.message.includes("title")).toBeTruthy();
    });
});
