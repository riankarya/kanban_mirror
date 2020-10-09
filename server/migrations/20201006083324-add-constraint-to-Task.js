'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Tasks", {
      fields: ["UserId"],
      type: "foreign key",
      name: "custom_fkey_UserId",
      references: {table: "Users", field: "id"},
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Tasks", "UserId")
  }
};
