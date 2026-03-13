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

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    console.log(updatedData, id, req.body);

    try {
      const updatedRegister = await this.entityService.updateRegister(updatedData, Number(id));

      if (!updatedRegister) {
        return res.status(404).json({ message: "Registero não foi atualizado" });
      }

      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {}
  }
}

module.exports = Controller;
