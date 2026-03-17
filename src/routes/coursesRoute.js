const { Router } = require("express");
const CourseController = require("../controllers/CourseController.js");

const courseController = new CourseController();

const router = Router();

router.get("/cursos", (req, res) => courseController.getAll(req, res));
router.get("/cursos/:id", (req, res) => courseController.getById(req, res));
router.post("/cursos", (req, res) => courseController.create(req, res));
router.put("/cursos/:id", (req, res) => courseController.update(req, res));
router.delete("/cursos/:id", (req, res) => courseController.delete(req, res));
/* router.get('/cursos/:estudanteId/matriculas', (req, res) => courseController.pegaMatriculas(req, res)); */
/* router.post('/cursos/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res)); */

module.exports = router;
