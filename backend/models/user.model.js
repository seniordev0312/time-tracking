const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const User = sequelize.define(
  "User",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    middle_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    place_birth: {
      type: DataTypes.STRING,
    },
    date_birth: {
      type: DataTypes.STRING,
    },
    date_passing: {
      type: DataTypes.STRING,
    },
    mobile_number: {
      type: DataTypes.STRING,
    },
    user_type: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);
module.exports = User;
