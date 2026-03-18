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
}

module.exports = PersonServices;
