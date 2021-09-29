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
    test("unsuccessfully create company", async () => {
        // Test for error when no name is supplied
        const noNameData = { logoUrl: "https://blah.com" };
        const noNameResponse = await request(app)
            .post("/companies")
            .send(noNameData)
            .expect(400);
        expect(noNameResponse.error.text.includes("name")).toBeTruthy();
        // Test for error when no URL is supplied
        const noUrlData = { name: "value" };
        const noUrlResponse = await request(app)
            .post("/companies")
            .send(noUrlData)
            .expect(400);
        expect(noUrlResponse.error.text.includes("logoUrl")).toBeTruthy();
    });

    test("unsuccessfully create menu", async () => {
        const randomCompany = await Company.findOne();
        const incorrectData = { key: "value" }; // "title" must be supplied
        const response = await request(app)
            .post(`/companies/${randomCompany.id}/menus`)
            .send(incorrectData)
            .expect(400);
        expect(response.error.text.includes("title")).toBeTruthy();
    });
});
