const { Router } = require("express");
const pessoaController = require("../controllers/PessoaController.js");

const router = Router();

router.get("/pessoas", pessoaController.getAll);

module.exports = router;
