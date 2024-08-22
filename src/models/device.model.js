const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Users = require("./user.model");

const Devices = sequelize.define(
  "devices",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'id'
      }
    },
    machineCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    serial: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    part: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    structure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specifications: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parameter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deviceType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productionType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    typeOfDevice: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Devices;
