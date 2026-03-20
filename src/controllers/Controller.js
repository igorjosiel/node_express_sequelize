class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.entityService.getAllRegisters();

      return res.status(200).json(registersList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    try {
      const register = await this.entityService.getRegisterById(Number(id));

      res.status(200).json(register);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    const newRegisterData = req.body;

    try {
      const newRegister =
        await this.entityService.createRegister(newRegisterData);

      return res.status(201).json(newRegister);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    console.log(updatedData, id, req.body);

    try {
      const updatedRegister = await this.entityService.updateRegister(
        updatedData,
        Number(id),
      );

      if (!updatedRegister) {
        return res
          .status(404)
          .json({ message: "Registero não foi atualizado" });
      }

      return res.status(200).json({ message: "Atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      await this.entityService.deleteRegister(Number(id));

      return res.status(200).json({ message: "Deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
