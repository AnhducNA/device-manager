const express = require("express");
const router = express.Router();
const controller = require("../controllers/device.controller");

router.get("/", controller.getAll);
router.get("/:id", controller.getDetail);
router.post("/create", controller.createData);

module.exports = router;
