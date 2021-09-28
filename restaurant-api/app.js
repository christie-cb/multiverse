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
    res.send(companies);
});

app.get("/companies/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    const companies = await Company.findAll({ where: { id: companyId } });
    res.send(companies);
});

app.get("/companies/:companyId/menus", async (req, res) => {
    const companyId = req.params.companyId;
    const menus = await Menu.findAll({ where: { CompanyId: companyId } });
    res.send(menus);
});

app.post("/companies", async (req, res) => {
    const newCompany = await Company.create({
        name: req.body.name,
        logoUrl: req.body.logoUrl,
    });
    res.send(newCompany);
});

app.delete("/companies/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    Company.destroy({ where: { id: companyId } });
    res.send(`Successfully destroyed company ${companyId}`);
});

// Extension Assignments
//● Get a specific menu by its id
//● Replace a specific company
//● Create a new menu
//● Delete a menu
//● Create a new location

app.get("/menus", async (req, res) => {
    const menus = await Menu.findAll();
    res.send(menus);
});

app.get("/menus/:menuId", async (req, res) => {
    const menuId = req.params.menuId;
    const menus = await Menu.findByPk(menuId);
    res.send(menus);
});

app.post("/companies/:companyId/menus", async (req, res) => {
    const companyId = req.params.companyId;
    const company = await Company.findByPk(companyId);
    const newMenu = await Menu.create({
        title: req.body.title,
        CompanyId: companyId,
    });
    company.addMenu(newMenu);
    res.send(newMenu);
});

app.delete("/menus/:menuId", async (req, res) => {
    const menuId = req.params.menuId;
    await Menu.destroy({ where: { id: menuId } });
    res.send(`Successfully destroyed menu ${menuId}`);
});

module.exports = app;
