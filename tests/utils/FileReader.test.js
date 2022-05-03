const Reader = require("./../../lib/utils/FileReader");

describe("Test in FileReader.js File", () => {
    test("should return an object", () => {
        const fileReader = Reader.readJsonFile("visualPartners.json");
        expect(fileReader).toBeInstanceOf(Object);
    });

});