const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bycrpt = require("bcrypt");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.INTEGER,
      allowNull: false,
      Validate: {
        len: [5, 16],
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
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
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize: sequelize,
    timeestamps: false,
    freeseTableName: true,
    modelName: "User",
    underscored: true,
  }
);

// User.beforeCreate(user()=>{
//     User.password = awaits bycrpt.hash(user.password, 10);
// })
module.exports = User;
