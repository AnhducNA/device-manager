const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
// Route to get all todos
router.get("/list", userController.getAllUser);
// Route to create a new todo
router.post("/", userController.createTodo);
// Route to get a todo by ID
router.get("/:id", userController.getTodoById);
// Route to update a todo by ID
router.put("/:id", userController.updateTodo);
// Route to delete a todo by ID
router.delete("/:id", userController.deleteTodo);
module.exports = router;
