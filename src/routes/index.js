// Requiring module
const express = require("express");

const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const deviceRoute = require("./device.route");
const categoryDeviceRoute = require("./category_device.route");

const router = express.Router();
const initRoute = (app) => {
  router.use("/api/auth", authRoute);
  router.use("/api/user", userRoute);
  router.use("/api/device", deviceRoute);
  router.use("/api/category-device", categoryDeviceRoute);

  router.use((data, req, res, next) => {
    console.log("Handling error middleware: ", data);
    return res.status(200).json({
      data,
    });
  });
  app.use(router);
};
// url image:  http://localhost:8000/images/user/user7.png
module.exports = initRoute;
