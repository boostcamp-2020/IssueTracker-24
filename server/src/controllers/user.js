const { User } = require('../models');

const getAllUser = async (req, res, next) => {
  const users = await User.findAll({
    attributes: ['id', 'sns_id'],
  });
  return res.status(200).json(users);
};
module.exports = { getAllUser };
