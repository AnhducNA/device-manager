const User = require("../models/user.model");

exports.getAllData = async () => {
  return User.findAll();
};

exports.createData = async (dataParams) => {
  const newData = User.create(dataParams);
  return newData;
};

exports.getUserByEmail = async (email) => {
  return await User.findOne({
    attributes: { exclude: ["createdAt", "updatedAt"] },
    where: { email: email },
    raw: true,
  });
};
