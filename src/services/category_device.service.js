const CategoryDevice = require("../models/category_device.model");

exports.getAllData = async () => {
  return CategoryDevice.findAll();
};

exports.getDetail = async (id) => {
  return CategoryDevice.findOne({ where: { id } });
};

exports.createData = async (dataParams) => {
  const newData = CategoryDevice.create(dataParams);
  return newData;
};
