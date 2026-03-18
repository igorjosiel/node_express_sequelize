const Controller = require("./Controller.js");
const PersonServices = require("../services/PersonServices.js");

const personServices = new PersonServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getMatriculas(req, res) {
    const { studentId } = req.params;

    try {
      const matriculasList = await personServices.getMatriculasByStudent(Number(studentId));

      return res.status(200).json(matriculasList);
    } catch (error) {
      // error
    }
  }

  async getCursos(req, res) {
    const { teacherId } = req.params;

    try {
      const coursesList = await personServices.getCoursesByDocente(Number(teacherId));

      return res.status(200).json(coursesList);
    } catch (error) {
      // error
    }
  }
}

module.exports = PersonController;
