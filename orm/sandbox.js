const Cinema = require("./models/cinema");
const Movie = require("./models/movie");
const Screening = require("./models/screening");
const setupDb = require("./setUp");

async function sandbox() {
    await setupDb();
    const leicesterSq = await Cinema.create({
        location: "Leicester Square",
        screenCount: 5,
    });
    const curzon = await Cinema.create({
        location: "Curzon Street",
        screenCount: 10,
    });
    const starWars = await Movie.create({
        title: "Star Wars",
        duration: 130,
    });
    const screening1 = await Screening.create({
        startTime: new Date(2021, 11, 01, 19, 45),
        screenNumber: 2,
    });

    starWars.addScreening(screening1);
    curzon.addScreening(screening1);

    const screening2 = await Screening.create({
        startTime: new Date(2021, 11, 01, 18, 05),
        screenNumber: 1,
        CinemaId: leicesterSq.id,
        MovieId: starWars.id,
    });
}
sandbox();
