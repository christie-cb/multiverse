const Cinema = require("./cinema");
const Movie = require("./movie");
const Screening = require("./screening");
const db = require("./db");

async function setupDb() {
    // One cinema has many screenings.
    Cinema.hasMany(Screening);
    // One movie has many screenings.
    Movie.hasMany(Screening);

    // One-to-One relationship between Screenings and Cinemas.
    Screening.belongsTo(Cinema, { foreignKey: "cinema_id" });
    Screening.belongsTo(Movie, { foreignKey: "movie_id" });

    await db.sync({ force: true, logging: console.log }); // Resets/deletes the db every time.
}

module.exports = setupDb;
