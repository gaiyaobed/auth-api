const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrementIdentity: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false },
);

module.exports = Role;