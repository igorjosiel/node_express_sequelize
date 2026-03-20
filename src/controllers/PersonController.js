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
      const matriculasList = await personServices.getMatriculasByStudent(
        Number(studentId),
      );

      return res.status(200).json(matriculasList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCourses(req, res) {
    const { teacherId } = req.params;

    try {
      const coursesList = await personServices.getCoursesByDocente(
        Number(teacherId),
      );

      return res.status(200).json(coursesList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async countCourses(req, res) {
    const { teacherId } = req.params;

    try {
      const courseCount = await personServices.countCoursesByDocente(
        Number(teacherId),
      );

      return res.status(200).json({ courseCount });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCoursesByTitle(req, res) {
    const { teacherId } = req.params;
    const { curso } = req.query;

    try {
      const coursesList = await personServices.getCoursesByTitle(
        Number(teacherId),
        curso,
      );

      return res.status(200).json(coursesList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = PersonController;
