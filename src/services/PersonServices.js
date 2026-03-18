const Services = require("./Services.js");

class PersonServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async getMatriculasByStudent(studentId) {
    const student = await super.getRegisterById(studentId);
    const matriculasList = await student.getAulasMatriculadas();

    return matriculasList;
  }

  async getCoursesByDocente(teacherId) {
    const teacher = await super.getRegisterById(teacherId);
    const coursesList = await teacher.getCursos();

    return coursesList;
  }
}

module.exports = PersonServices;
