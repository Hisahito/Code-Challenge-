// Creating class to delegate funtions to the service


class StudentsService {
    static certifiedStudentEmails(students) {
        const certifiedStudents = students.filter((student) => student.haveCertification === true);
        return certifiedStudents.map((student) => student.email);
    }
    static studentsCredits(students) {
        return students.filter((student) => student.credits > 500);   
    }
    static getStudents(students) {
        return students;
    }
}

module.exports = StudentsService;

