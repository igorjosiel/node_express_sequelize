class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.entityService.getAllRegisters();

      return res.status(200).json(registersList);
    } catch (error) {}
  }
}

module.exports = Controller;
