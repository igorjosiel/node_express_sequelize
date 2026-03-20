const dataSource = require("../database/models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }

  async getRegisterById(id) {
    return dataSource[this.modelName].findByPk(id);
  }

  async createRegister(newData) {
    return dataSource[this.modelName].create(newData);
  }

  async updateRegister(updatedData, id) {
    const updatedRegistersList = await dataSource[this.modelName].update(
      updatedData,
      { where: { id: id } },
    );

    if (updatedRegistersList[0] === 0) return false;

    return true;
  }

  async deleteRegister(id) {
    return dataSource[this.modelName].destroy({ where: { id: id } });
  }
}

module.exports = Services;
