const StudentsService = require("./../../lib/services/ConsulterService");

describe("Testing the ConsulterService.js file", () => { 
    const students = [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "email": "johndoe7@gmail.com",
            "credits": 501,
            "haveCertification": true
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "janedoe7@gmail.com",
            "credits": 499,
            "haveCertification": false
        }
    ];
    test("Test in the StudentService class", () => {
        const studentsService = StudentsService.getStudents(students);
        expect(studentsService).toEqual(students);
    });
    test("Testing the certifiedStudentEmails method", () => {
        const studentsService = StudentsService.certifiedStudentEmails(students);
        expect(studentsService).toEqual(["johndoe7@gmail.com"]);
    });
    test("Testing the studentsCredits method", () => {
        const studentsService = StudentsService.studentsCredits(students);
        expect(studentsService).toEqual([{"id": 1, "firstName": "John", "lastName": "Doe", "email": "johndoe7@gmail.com", "credits": 501, "haveCertification": true}]);
    });
});