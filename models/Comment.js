const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bycrpt = require("bcrypt");
// const User = sequelize.define(
//   "user",
class Comment extends Model {}
Comment.init(
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
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
        model: "Post",
        key: "id",
      },
    },
  },
  {
    sequelize: sequelize,
    timeestamps: false,
    freeseTableName: true,
    modelName: "Comment",
    underscored: true,
  }
);

module.exports = Comment;
