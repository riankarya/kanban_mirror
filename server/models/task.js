'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === '') {
            throw new Error('title harus diisi')
          }
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        customValidator(value) {
          if (value === '') {
            throw new Error('description harus diisi')
          }
        }
      }
    },
    category: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};