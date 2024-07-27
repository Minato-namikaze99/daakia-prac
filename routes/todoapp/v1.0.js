const express = require("express");
const router = express.Router();
const appController = require("../../controllers/appController");
const { Todo } = require("../../models/Todo");
const { User } = require("../../models/User");
const { authenticateToken } = require("../../middleware/jwtAuth");

router.post("/user/login", appController.login);
router.post("/user/register", appController.register);

router.use(authenticateToken);

router.get("/todos", appController.getAllTodos);
router.get("/todos/done", appController.getDoneTodos);
router.get("/todos/undone", appController.getUndoneTodos);
    
router.post("/todos", appController.createTodo);

router.put("/todos/:todoId/done", appController.markTodoAsDone);

router.delete("/todos/:todoId", appController.deleteTodoByID);

// todoController.setupAssociations({ User, Todo });

module.exports = router;