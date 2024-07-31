const Joi = require("joi");

exports.createTodo = Joi.object({
  title: Joi.string().pattern(new RegExp("[a-zA-Z0-9s]")).required(),
  status: Joi.boolean().required(),
});

exports.markTodoAsDone = Joi.object({
  todoId: Joi.number().required(),
});

exports.deleteTodoByID = Joi.object({
  todoId: Joi.number().required(),
});
