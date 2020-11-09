const { Milestone } = require('../models');

const getAllMilestone = async (req, res, next) => {
  const milestones = await Milestone.findAll({});
  res.status(200).json(milestones);
};

const createMilestone = async (req, res, next) => {
  const { title, description, due_date } = req.body;
  try {
    const milestone = await Milestone.create({
      title,
      description,
      due_date: due_date ? new Date(due_date) : null,
      state: 'open',
    });
    return res.status(201).json(milestone);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllMilestone, createMilestone };
