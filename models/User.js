const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bycrpt = require('bcrypt');
// const User = sequelize.define(
//   "user",
  
User.init(
{
    id: {
    types: DataTypes.INTEGER,
    primary: true,
    autoImcrement: true,
    allowNull: false,
  },
    username: {
      type: Sequelize.INTEGER,
      allowNull: false,
      Validate: {
        len: [5, 16],
      },
    },
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
    modelName: "users",
    underscored: true,
  },
);

User.beforeCreate(user()=>{
    User.password = awaits bycrpt.hash(user.password, 10);
})
module.exports = Users;
