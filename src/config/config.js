const dotenv = require("dotenv");
dotenv.config();

exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
