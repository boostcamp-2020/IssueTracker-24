const { Milestone } = require('../models');
const errorCode = require('../utils/error-code');

const getAllMilestone = async (req, res, next) => {
  const milestones = await Milestone.findAll({});
  res.status(errorCode.RESPONSE_OK).json(milestones);
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
    return res.status(errorCode.RESPONSE_CREATED).json(milestone);
  } catch (err) {
    next(err);
  }
};

const deleteMilestone = async (req, res, next) => {
  const { id } = req.params;
  try {
    const milestone = await Milestone.destroy({
      where: { id },
    });
    return res.status(errorCode.RESPONSE_OK).json(milestone);
  } catch (err) {
    next(err);
  }
};

const getMilestone = async (req, res, next) => {
  const { id } = req.params;
  try {
    const milestone = await Milestone.findByPk(id, { attributes: ['id', 'title', 'description', 'due_date', 'state'] });
    return res.status(errorCode.RESPONSE_OK).json(milestone);
  } catch (err) {
    next(err);
  }
};

const updateMilestone = async (req, res, next) => {
  const { id } = req.params;
  const { title, due_date, description, state } = req.body;
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
  return res.status(errorCode.RESPONSE_OK).json(milestone);
};

const patchMilestone = async (req, res, next) => {
  const { id } = req.params;
  const { title, due_date, description, state } = req.body;
  const patchedMilestone = {};
  if (title) patchedMilestone.title = title;
  if (due_date) patchedMilestone.due_datet = due_date;
  if (description) patchedMilestone.description = description;
  if (state) patchedMilestone.state = state;

  await Milestone.update(patchedMilestone, { where: { id } });
  const milestone = await Milestone.findByPk(id, { attributes: ['id', 'title', 'description', 'due_date', 'state'] });
  return res.status(errorCode.RESPONSE_OK).json(milestone);
};

module.exports = { getAllMilestone, createMilestone, getMilestone, updateMilestone, patchMilestone, deleteMilestone };
