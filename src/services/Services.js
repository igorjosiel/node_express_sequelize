const dataSource = require("../models");

class Services {
  constructor(modelName) {
    this.modelName = modelName;
  }

  async getAllRegisters() {
    return dataSource[this.modelName].findAll();
  }

  async updateRegister(updatedData, id) {
    const updatedRegistersList = await dataSource[this.modelName].update(
      updatedData,
      { where: { id: id } },
    );

    if (updatedRegistersList[0] === 0) {
      return false;
    }

    return true;
  }
}

module.exports = Services;
