// Requiring module
const express = require("express");

const userRoute = require("./user.route");
const initRoute = (app) => {
  app.use("/api/user", userRoute);

  app.use((data, req, res, next) => {
    console.log("Handling error middleware: ", data);
    return res.status(200).json({
      data,
    });
  });
};
// url image:  http://localhost:8000/images/user/user7.png
module.exports = initRoute;
