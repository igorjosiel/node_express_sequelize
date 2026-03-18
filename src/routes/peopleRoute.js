const { Router } = require("express");
const PersonController = require("../controllers/PersonController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const personController = new PersonController();
const matriculaController = new MatriculaController();

const router = Router();

router.get("/pessoas", (req, res) => personController.getAll(req, res));
router.get("/pessoas/:id", (req, res) => personController.getById(req, res));
router.post("/pessoas", (req, res) => personController.create(req, res));
router.put("/pessoas/:id", (req, res) => personController.update(req, res));
router.delete("/pessoas/:id", (req, res) => personController.delete(req, res));

router.get("/professores/:teacherId/cursos", (req, res) =>
  personController.getCursos(req, res),
);
router.get("/pessoas/:studentId/matriculas", (req, res) =>
  personController.getMatriculas(req, res),
);
router.post("/pessoas/:studentId/matriculas", (req, res) =>
  matriculaController.create(req, res),
);

module.exports = router;
