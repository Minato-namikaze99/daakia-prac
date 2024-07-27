var DataTypes = require("sequelize").DataTypes;
var _todo = require("./Todo");
var _user = require("./User");

function initModels(sequelize) {
  var Todo = _todo(sequelize, DataTypes);
  var User = _user(sequelize, DataTypes);

  Todo.belongsTo(User, { as: "user", foreignKey: "user_id"});
  User.hasMany(Todo, { as: "todos", foreignKey: "user_id"});

  return {
    Todo,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
