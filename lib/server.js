// Inicializando nuestro servidor 
const StudentsController = require("./controllers/studentsControllers");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({massage: "VisualPartner API. Welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Partners API is running on port ${port}`);
});

app.get("/v1/:students", (request, response) => {
    const students = request.params.students;
    const allStudents = StudentsController.allStudents(students);
    response.json(allStudents);
});

app.get("/v1/students/:emails", (request, response) => {
    const emails = request.params.emails;
    const emailStudents = StudentsController.emailStudents(emails);
    response.json(emailStudents);
});

app.get("/v1/students/numbers/:credits", (request, response) => {
    const credits = request.params.credits;
    const creditsStudents = StudentsController.creditsStudents(credits);
    response.json(creditsStudents);
});
