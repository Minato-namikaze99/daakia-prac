const express = require("express");
const router = express.Router();
const appController = require("../../controllers/appController");

const { authenticateToken } = require("../../middleware/jwtAuth");

const { validate } = require("../../middleware/validator");
const schema = require("./schema");

router.use(authenticateToken);

router.get("/todos", appController.getAllTodos);
router.get("/todos/done", appController.getDoneTodos);
router.get("/todos/undone", appController.getUndoneTodos);
    
router.post("/todos", validate(schema.createTodo), appController.createTodo);

router.put("/todos/:todoId/done", validate(schema.markTodoAsDone), appController.markTodoAsDone);

router.delete("/todos/:todoId", validate(schema.deleteTodoByID), appController.deleteTodoByID);

// todoController.setupAssociations({ User, Todo });

module.exports = router;