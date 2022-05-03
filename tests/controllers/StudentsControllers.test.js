const StudentsControllers = require("./../../lib/controllers/StudentsControllers");

describe("Test in StudentsControllers class", () => { 
    test("Testing if StudentsController is defined as a class", () => { 
        const students = new StudentsControllers();
        expect(students).toBeDefined();
    });
 
});