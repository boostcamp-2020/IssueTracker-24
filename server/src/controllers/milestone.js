const { Milestone } = require('../models');

const getAllMilestone = async (req, res, next) => {
  const milestones = await Milestone.findAll({});
  res.status(200).json(milestones);
};
module.exports = { getAllMilestone };
