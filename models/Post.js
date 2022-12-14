const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bycrpt = require("bcrypt");
// const User = sequelize.define(
//   "user",
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        Model: "User",
        key: "id",
      },
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      Validate: {
        len: [8, 30],
        isAlphanumeric: true,
      },
    },
  },
  {
    sequelize: sequelize,
    timeestamps: false,
    freeseTableName: true,
    modelName: "Post",
    underscored: true,
  }
);

module.exports = Post;
