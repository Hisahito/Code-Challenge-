// Creating class to delegate funtions to the service

class StudentsService {
    static certifiedStudentEmails(students) {
        if (students.haveCertification === true) {
            return students.email;
        }else {
            return null;
        }
    }
    static studentsCredits(students) {
        const up500Credits = students.filter(student => student.credits >= 500);
        return up500Credits;
    }
    static getStudents(students) {
        return students;
    }
}

module.exports = StudentsService;