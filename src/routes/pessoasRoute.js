const { Router } = require("express");
const pessoaController = require("./../controllers/pessoaController");

const router = Router();

router.get("/pessoas", pessoaController.getAll);

module.exports = router;
