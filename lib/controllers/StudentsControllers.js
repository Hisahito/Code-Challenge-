const StudentsService = require("../services/consulterService");
const Reader = require("./../utils/FileReader");


class StudentsController {
    static allStudents() {
        const students = Reader.readJsonFile("visialpartners.json");
        return StudentsService.getStudents(students);
    }
    static emailStudents() {
        const students = Reader.readJsonFile("visialpartners.json");
        return StudentsService.certifiedStudentEmails(students);
    }
    static creditsStudents() {
        const students = Reader.readJsonFile("visialpartners.json");
        return StudentsService.studentsCredits(students);
    }
}





module.exports = StudentsController;
