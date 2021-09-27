const express = require("express");
const setupDb = require("./setupDb");
const Company = require("./models/company");
const Location = require("./models/location");
const Menu = require("./models/menu");

const app = express();
app.use(express.json());

setupDb();

//At minimum, your API should have the following endpoints
//● Get all the companies
//● Get a specific company by its id
//● Get all a company’s menus
//● Create a new company
//● Delete a company

app.get("/companies", async (req, res) => {
    const companies = await Company.findAll();
    console.log(companies);
    res.send(JSON.stringify(companies));
});

app.get("/companies/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    const companies = await Company.findAll({ where: { id: companyId } });
    console.log(companies);
    res.send(JSON.stringify(companies));
});

app.get("/companies/:companyId/menus", async (req, res) => {
    const companyId = req.params.companyId;
    const menus = await Menu.findAll({ where: { CompanyId: companyId } });
    console.log(menus);
    res.send(JSON.stringify(menus));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
