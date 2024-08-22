const Device = require("../models/device.model");

exports.getAllData = async () => {
  return Device.findAll();
};

exports.getDetail = async (id) => {
  return Device.findOne({ where: { id } });
};

exports.createData = async (dataParams) => {
  const newData = Device.create(dataParams);
  return newData;
};
