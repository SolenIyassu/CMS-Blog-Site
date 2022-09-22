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
  post_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    reference:{
      model: "Post", key: 'id'
    }
  }
  {
    Sequelize: sequelize,
    timeestamps: false,
    freeseTableName: true,
    modelName: "Comments",
    underscored: true,
  },
});

module.exports = Comments;
