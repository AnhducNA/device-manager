require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./src/models/index");
const initRoute = require("./src/routes");

// Connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

// config cors
const whitelist = ["http://localhost:3000", "http://localhost:5000"];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

// Middleware to parse JSON requests
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
initRoute(app);

// simple route
app.get("/", cors(corsOptions), (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
