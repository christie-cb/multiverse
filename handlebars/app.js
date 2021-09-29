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
//const handlebars = expressHandlebars({
//    handlebars: allowInsecurePrototypeAccess(Handlebars),
//});

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
    },
});
app.engine('handlebars', handlebars.engine);

//app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");

//Handlebars.registerHelper("grouped_each", function (every, context, options) {
//    var out = "",
//        subcontext = [],
//        i;
//    if (context && context.length > 0) {
//        for (i = 0; i < context.length; i++) {
//            if (i > 0 && i % every === 0) {
//                out += options.fn(subcontext);
//                subcontext = [];
//            }
//            subcontext.push(context[i]);
//        }
//        out += options.fn(subcontext);
//    }
//    return out;
//});

app.get("/", async (req, res) => {
    const companies = await Company.findAll();
    res.render("home", { companies });
});

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

app.delete("/companies/:companyId", async (req, res) => {
    const companyId = req.params.companyId;
    Company.destroy({ where: { id: companyId } });
    res.send(`Successfully destroyed company ${companyId}`);
});

app.get("/menus", async (req, res) => {
    const menus = await Menu.findAll();
    res.send(menus);
});

app.get("/menus/:menuId", async (req, res) => {
    const menuId = req.params.menuId;
    const menus = await Menu.findByPk(menuId);
    res.send(menus);
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

app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }
    return res.status(500).json(err);
});

module.exports = app;
