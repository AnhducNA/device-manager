const authService = require("../services/auth.service");

exports.login = async (req, res) => {
  try {
    const loginDto = {
      email: req.body.email,
      password: req.body.password,
    };
    const dataLogin = await authService.login(loginDto);
    return res
      .status(200)
      .json({ status: 1, message: "success", data: dataLogin });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const registerDto = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const newUser = await authService.register(registerDto);
    return res
      .status(200)
      .json({ status: 1, message: "success", data: newUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
