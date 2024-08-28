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
if (process.env.NODE_ENV === "production") {
  var whitelist = [
    "http://localhost:3000",
    "http://localhost:5000",
    "https://device-manager-zuvh.onrender.com/",
  ];
  var corsOptions = {
    origin: (origin, callback) => {
      var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      console.log("ORIGIN: ", origin); // => undefined
      callback(
        originIsWhitelisted ? null : "Error CorsOptions Bad Request",
        originIsWhitelisted
      );
    },
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// Middleware to parse JSON requests
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
initRoute(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
