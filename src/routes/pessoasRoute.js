const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const personController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => personController.getAll(req, res));
router.put("/pessoas/:id", (req, res) => personController.update(req, res));

module.exports = router;
