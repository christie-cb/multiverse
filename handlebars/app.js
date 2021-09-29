const express = require("express");
const setupDb = require("../restaurant-api/setupDb");

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
    const locations = await Location.findAll({
        where: { CompanyId: company.id },
    });
    const menus = await Menu.findAll({ where: { CompanyId: company.id } });
    res.render("company", { company, menus, locations });
});

app.get("/about", async (req, res) => {
    res.render("about", {});
});

app.get("/form", async (req, res) => {
    res.render("form", {});
});

app.post("/companies", async (req, res) => {
    const newCompany = await Company.create({
        name: req.body.name,
        logoUrl: req.body.logoUrl,
    });
    res.send(newCompany);
});

module.exports = app;
