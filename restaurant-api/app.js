const express = require("express");
const setupDb = require("./setupDb");
const { validate, ValidationError, Joi } = require("express-validation");

const Company = require("./models/company");
const Location = require("./models/location");
const Menu = require("./models/menu");

const app = express();
app.use(express.json());

setupDb();

app.get("/companies", async (req, res) => {
    const companies = await Company.findAll();
    res.send(companies);
});

app.get("/companies/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    const company = await Company.findAll({ where: { id: companyId } });
    if (!company || company.length === 0) {
        return res.sendStatus(404);
    }
    res.send(company);
});

app.get("/companies/:companyId/menus", async (req, res) => {
    const companyId = req.params.companyId;
    const menus = await Menu.findAll({ where: { CompanyId: companyId } });
    res.send(menus);
});

const companyValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        logoUrl: Joi.string().required(),
    }),
};

app.post(
    "/companies",
    validate(companyValidation, {}, {}),
    async (req, res) => {
        const newCompany = await Company.create({
            name: req.body.name,
            logoUrl: req.body.logoUrl,
        });
        res.send(newCompany);
    }
);

app.delete("/companies/:companyId", (req, res) => {
    const companyId = req.params.companyId;
    Company.destroy({ where: { id: companyId } }).then((count) => {
        if (!count) {
            return res.status(404).send({ error: `No company ${companyId}` });
        }
        res.sendStatus(204);
    });
});

app.get("/menus", async (req, res) => {
    const menus = await Menu.findAll();
    res.send(menus);
});

app.get("/menus/:menuId", async (req, res) => {
    const menuId = req.params.menuId;
    const menu = await Menu.findByPk(menuId);
    if (!menu) {
        return res.status(404).send({ error: `No menu ${menuId}` });
    }
    res.send(menu);
});

const menuValidation = {
    body: Joi.object({
        title: Joi.string().required(),
    }),
};

app.post(
    "/companies/:companyId/menus",
    validate(menuValidation, {}, {}),
    async (req, res) => {
        const companyId = req.params.companyId;
        const company = await Company.findByPk(companyId);
        const newMenu = await Menu.create({
            title: req.body.title,
            CompanyId: companyId,
        });
        company.addMenu(newMenu);
        res.send(newMenu);
    }
);

app.delete("/menus/:menuId", async (req, res) => {
    const menuId = req.params.menuId;
    await Menu.destroy({ where: { id: menuId } });
    res.send(`Successfully destroyed menu ${menuId}`);
});

const locationValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        manager: Joi.string().required(),
        capacity: Joi.number().required(),
    }),
};

app.post(
    "/companies/:companyId/locations",
    validate(locationValidation, {}, {}),
    async (req, res) => {
        const companyId = req.params.companyId;
        const company = await Company.findByPk(companyId);
        const newLocation = await Location.create({
            name: req.body.name,
            manager: req.body.manager,
            capacity: req.body.capacity,
            CompanyId: companyId,
        });
        company.addMenu(newLocation);
        res.send(newLocation);
    }
);

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
});

module.exports = app;
