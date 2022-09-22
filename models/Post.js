const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bycrpt = require('bcrypt');
// const User = sequelize.define(
//   "user",
  
Post.init(
{
    id: {
    types: DataTypes.INTEGER,
    primary: true,
    autoImcrement: true,
    allowNull: false,
  },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    
    user_id:{
        type: DataTypes. INTEGER,
        allowNull: false,
        reference: {
            Model: user, key: id,
        }
  },
  {
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      Validate: {
        len: [8, 30],
        isAlphanumeric: true,
      },
    },
  },
  {
    Sequelize: sequelize,
    timeestamps: false,
    freeseTableName: true,
    modelName: "Posts",
    underscored: true,
  },
);


})
module.exports = Post;
