const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const UserService = require("../services/user.service");
const { JWT_SECRET_KEY } = require("../config/config");

exports.login = async (loginParams = { email: "", password: "" }) => {
  const userLogin = await UserService.getUserByEmail(loginParams.email);

  if (!userLogin) {
    throw new Error("Email không tồn tại");
  }
  const isCompare = await bcrypt.compareSync(
    loginParams.password,
    userLogin.password
  );

  if (isCompare === false) {
    throw new Error("Mật khẩu không đúng");
  }
  const tokenAccess = await this.generateToken({ userId: userLogin.id });
  return {
    tokenAccess,
    userLogin: {
      id: userLogin.id,
      name: userLogin.name,
      email: userLogin.email,
      role: userLogin.role,
    },
  };
};

exports.register = async (
  registerParams = { name: "", email: "", password: "" }
) => {
  const user = await UserService.getUserByEmail(registerParams.email);
  if (user) {
    throw new Error("Email đã tồn tại");
  }
  this.validatePassword(registerParams.password);

  const passwordHash = bcrypt.hashSync(registerParams.password, 10);
  registerParams.password = passwordHash;
  const newUser = User.create(registerParams);
  return newUser;
};

exports.validatePassword = (password = "") => {
  if (password.length < 6) {
    throw new Error("Độ dài mật khẩu phải ít nhất 6 ký tự");
  }
};
exports.generateToken = async (payload = { userId: "", time: new Date() }) => {
  const tokenAccess = jwt.sign(payload, JWT_SECRET_KEY);
  return tokenAccess;
};
