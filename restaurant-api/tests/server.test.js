const app = require("../app");
const request = require("supertest");

describe("GET requests", () => {
    test("get all companies", function (done) {
        request(app)
            .get("/companies")
            .expect("X-Powered-By", "Express")
            .expect(200, done);
    });

    test("get company by ID", async () => {
        const response = await request(app).get("/companies/21");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-length"] >= 0).toBeTruthy();
    });

    test("get company menus by ID", async () => {
        const response = await request(app).get("/companies/1/menus");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-length"] >= 0).toBeTruthy();
    });
});

describe("POST requests", () => {
    test("create new company", function (done) {
        const sentData = { name: "test name" };
        request(app)
            .post("/companies")
            .send(sentData)
            .expect("X-Powered-By", "Express")
            .expect(200)
            .then((response) => {
                const createdCompanyId = response.body.id;
                expect(response.body.name).toBe(sentData.name);
                // teardown
                request(app)
                    .delete(`/companies/${createdCompanyId}`)
                    .expect(200, done);
            })
            .catch((err) => done(err));
    });
});

describe("DELETE requests", () => {
    test("delete created company", function (done) {
        // setup
        request(app)
            .post("/companies")
            .then((response) => {
                const companyId = response.body.id;
                // test
                request(app)
                    .delete(`/companies/${companyId}`)
                    .expect(200, done);
            })
            .catch((err) => done(err));
    });
});
