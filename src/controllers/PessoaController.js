const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const personServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(personServices);
  }
}

module.exports = PessoaController;
