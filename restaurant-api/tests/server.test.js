const app = require("../app");
const request = require("supertest");

describe("GET requests", () => {
    test("get all companies", function (done) {
        request(app).get("/companies").expect(200, done);
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
                const createdCompanyId = response.body.id;
                expect(response.body.name).toBe(sentData.name);
                // teardown
                request(app)
                    .delete(`/companies/${createdCompanyId}`)
                    .expect(200, done);
            })
            .catch((err) => done(err));
    });

    test("create new menu", function (done) {
        const sentData = { title: "bread" };
        request(app)
            .post("/menus")
            .send(sentData)
            .expect(200)
            .then((response) => {
                expect(response.body.title).toBe(sentData.title);
                // teardown
                const createdMenuId = response.body.id;
                request(app)
                    .delete(`/menus/${createdMenuId}`)
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
                console.log(companyId);
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
                const createdMenuId = response.body.id;
                request(app)
                    .delete(`/menus/${createdMenuId}`)
                    .expect(200, done);
            })
            .catch((err) => done(err));
    });
});
