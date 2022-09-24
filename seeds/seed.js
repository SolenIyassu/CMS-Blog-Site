const sequelize = require("../config/connection");
const { User, Post, Comments } = require("../models");

const userData = require("./user.json");
const commentData = require("./comments.json");
const postData = require("./post.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: User[Math.floor(Math.random() * users.length)].id,
    });
  }
  process.exit(0);
};
seedDatabase();
