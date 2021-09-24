const Cinema = require("./models/cinema");
const Movie = require("./models/movie");
const Screening = require("./models/screening");
const db = require("./db");

async function setupDb() {
    Cinema.hasMany(Screening);
    Movie.hasMany(Screening);

    Screening.belongsTo(Cinema);
    Screening.belongsTo(Movie);

    await db.sync({ force: true, logging: console.log }); // Resets/deletes the db every time.
}

module.exports = setupDb;
