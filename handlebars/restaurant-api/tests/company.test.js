const Company = require("../models/company");
const setupDb = require("../setupDb");

beforeAll(async () => {
    await setupDb();
});

test("company has a name and an imageUrl", async () => {
    const neroName = "Caffe Nero";
    const nero = await Company.create({
        name: neroName,
        imageUrl: "https://picsum.photos/nero",
    });

    expect(nero).toBeInstanceOf(Company);
    expect(nero.name).toBe(neroName);
    await Company.destroy({ where: { id: nero.id } });
});
