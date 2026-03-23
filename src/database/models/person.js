"use strict";
const isValidCpf = require("../../utils/validateCpfHelper.js");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: "docente_id",
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: "estudante_id",
        scope: {
          status: "matriculado",
        },
        as: "aulasMatriculadas",
      });
    }
  }
  Pessoa.init(
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [3, 30],
            msg: "O campo deve conter entre 3 e 30 caracteres.",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "O campo deve conter um endereço de email válido.",
          },
        },
      },
      cpf: {
        type: DataTypes.STRING,
        validate: {
          cpfIsValid(cpf) {
            if (!isValidCpf(cpf))
              throw new Error("O campo deve conter um CPF válido.");
          },
        },
      },
      ativo: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        allRegisters: {
          where: {},
        },
      },
    },
  );
  return Pessoa;
};
