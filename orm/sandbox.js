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
    const snowWhite = Movie.create({
        title: "Snow White",
        duration: 112,
    });
    const starWars = Movie.create({
        title: "Star Wars",
        duration: 130,
    });

    const screening1 = Screening.create(
        {
            startTime: new Date(2021, 11, 01, 19, 45),
            screenNumber: 2,
            movie: {
                title: "Prince of Egypt",
                duration: 90,
            },
            cinema: {
                location: "Curzon Street",
                screenCount: 10,
            },
        },
        { include: [Movie, Cinema] }
    );
    const screening2 = Screening.create(
        {
            startTime: new Date(2021, 11, 01, 19, 45),
            screenNumber: 2,
            movie: {
                title: "The Nun",
                duration: 90,
            },
            cinema: {
                location: "Leicester Square",
                screenCount: 10,
            },
        },
        { include: [Movie, Cinema] }
    );
    const screening3 = Screening.create(
        {
            startTime: new Date(2021, 11, 01, 19, 45),
            screenNumber: 2,
            movie: {
                title: "Spirit Stallion of the Simarron",
                duration: 90,
            },
            cinema: {
                location: "Arts Picturehouse",
                screenCount: 10,
            },
        },
        { include: [Movie, Cinema] }
    );
    Screening.findAll({ logging: console.log });
}
sandbox();
