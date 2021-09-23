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
    const snowWhite = await Movie.create({
        title: "Snow White",
        duration: 112,
    });
    const starWars = await Movie.create({
        title: "Star Wars",
        duration: 130,
    });
    const screening1 = await snowWhite.createScreening({
        startTime: new Date(2021, 11, 01, 19, 45),
        screenNumber: 2,
    });
//    const screening1 = await Screening.createScreening({
//        title: "Star Wars",
//        duration: 130,
//    });
    starWars.addScreening(screening1);
    curzon.addScreening(screening1);
}
sandbox();
