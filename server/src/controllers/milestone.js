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

const getMilestone = async (req, res, next) => {
  const { id } = req.params;
  try {
    const milestone = await Milestone.findByPk(id, { attributes: ['id', 'title', 'description', 'due_date', 'state'] });
    return res.status(200).json(milestone);
  } catch (err) {
    next(err);
  }
};

const updateMilestone = async (req, res, next) => {
  const { id } = req.params;
  const { title, due_date, description, state } = req.body;
  console.log('update!');
  await Milestone.update(
    {
      title,
      description,
      due_date: due_date ? new Date(due_date) : null,
      state,
    },
    { where: { id } },
  );
  const milestone = await Milestone.findByPk(id, { attributes: ['id', 'title', 'description', 'due_date', 'state'] });
  return res.status(200).json(milestone);
};

module.exports = { getAllMilestone, createMilestone, getMilestone, updateMilestone };
