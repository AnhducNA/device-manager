const Device = require("../models/device.model");

exports.getAllData = async () => {
  return Device.findAll();
};

exports.getDetail = async (id) => {
  const data = await Device.findOne({ where: { id } });
  return data;
};

exports.createData = async (dataParams) => {
  const newData = Device.create(dataParams);
  return newData;
};
