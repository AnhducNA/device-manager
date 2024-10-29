const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const initRoute = require("@routes/index");

// Middleware to parse JSON requests
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
const PORT = process.env.PORT || 5000;

const listen = () => {
  server.listen(PORT, () => {
    console.log(`Express is running on port ${PORT}`);
  });
  initRoute(app);
};

module.exports = { app, server, listen };
