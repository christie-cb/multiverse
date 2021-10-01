const express = require("express");
const setupDb = require("../restaurant-api/setupDb");
const { validate, ValidationError, Joi } = require("express-validation");

const Company = require("../restaurant-api/models/company");
const Location = require("../restaurant-api/models/location");
const Menu = require("../restaurant-api/models/menu");

const path = require("path");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
    allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupDb();

// setup our templating engine

const handlebars = expressHandlebars.create({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    helpers: {
        grouped_each: function (every, context, options) {
            var out = "",
                subcontext = [],
                i;
            if (context && context.length > 0) {
                for (i = 0; i < context.length; i++) {
                    if (i > 0 && i % every === 0) {
                        out += options.fn(subcontext);
                        subcontext = [];
                    }
                    subcontext.push(context[i]);
                }
                out += options.fn(subcontext);
            }
            return out;
        },
        company_url: function (id) {
            return `companies/${id}`;
        },
    },
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.get("/", async (req, res) => {
    const companies = await Company.findAll();
    res.render("home", { companies });
});

app.get("/companies/:id", async (req, res) => {
    const company = await Company.findOne({ where: { id: req.params.id } });
    if (!company) {
        return res.sendStatus(404);
    }
    const locations = await Location.findAll({
        where: { CompanyId: company.id },
    });
    const menus = await Menu.findAll({ where: { CompanyId: company.id } });
    res.render("company", { company, menus, locations });
});

app.delete("/companies/:id", async (req, res) => {
    await Company.destroy({ where: { id: req.params.id } });
    res.redirect("/");
});

app.get("/about", async (req, res) => {
    res.render("about", {});
});

app.get("/form", async (req, res) => {
    res.render("form", {});
});

const companyValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        logoUrl: Joi.string().required(),
    }),
};

app.post("/companies", async (req, res) => {
    const { name, logoUrl } = req.body;
    if (!name || !logoUrl) {
        return res.render("form", {
            company_error: "Name and URL are required fields.",
        });
    }
    const company = await Company.create({ name, logoUrl });
    res.render("form", {
        title: `Successfully submitted company ${company.id}.`,
    });
});

app.post("/menus", async (req, res) => {
    const { company_id, title } = req.body;
    if (!title || !company_id) {
        return res.render("form", {
            menu_error: "Company ID and Title are required fields.",
        });
    }
    const company = await Company.findByPk(company_id);
    if (company instanceof Company) {
        const menu = await Menu.create({ title, CompanyId: company_id });
        return res.render("form", {
            title: `Successfully submitted menu ${menu.id}.`,
        });
    }
    res.render("form", { menu_error: `Company ${company_id} not found.` });
});

app.post("/locations", async (req, res) => {
    const { company_id, name, capacity, manager } = req.body;
    if ([company_id, name, capacity, manager].some((item) => !item)) {
        return res.render("form", {
            location_error: "All fields are required.",
        });
    }
    const company = await Company.findByPk(company_id);
    if (company instanceof Company) {
        const loc = await Location.create({
            name,
            capacity,
            manager,
            CompanyId: company_id,
        });
        return res.render("form", {
            title: `Successfully submitted menu ${loc.id}.`,
        });
    }
    res.render("form", { location_error: `Company ${company_id} not found.` });
});

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
});

module.exports = app;
