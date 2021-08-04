const User = require("./User");
const Projects = require("./Projects");

User.hasMany(Projects, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Projects.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Projects,
};
