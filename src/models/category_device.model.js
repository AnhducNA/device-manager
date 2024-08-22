const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const CategoryDevice = sequelize.define(
  "category_device",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nominal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    online: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CategoryDevice;
