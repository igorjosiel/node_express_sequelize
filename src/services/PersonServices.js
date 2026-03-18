const { Op } = require("sequelize");
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

  async countCoursesByDocente(teacherId) {
    const teacher = await super.getRegisterById(teacherId);
    const courseCount = await teacher.countCursos();

    return courseCount;
  }

  async getCoursesByTitle(teacherId, courseName) {
    const teacher = await super.getRegisterById(teacherId);
    const coursesList = await teacher.getCursos({
      where: { titulo: { [Op.like]: `%${courseName}%` } },
    });

    return coursesList;
  }
}

module.exports = PersonServices;
