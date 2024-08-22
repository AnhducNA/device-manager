const User = require("../models/user.model");

exports.getAllData = async () => {
  return User.findAll();
};

exports.createData = async (dataParams) => {
    const newData = User.create(dataParams)
  return User.findAll();
};
