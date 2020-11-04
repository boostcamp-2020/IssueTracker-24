const { User } = require('../models');

const getAllUser = async (req, res, next) => {
  const users = await User.findAll({});
  return res.status(200).json(users);
};
module.exports = { getAllUser };
