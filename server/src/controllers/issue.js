const { Issue, User, Label, Milestone } = require('../models');

const getAllIssues = async (req, res, next) => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'state', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['user_id', 'sns_id'],
      },
      {
        model: Label,
        as: 'labels',
        attributes: ['id', 'title', 'description', 'color'],
        through: { attributes: [] },
      },
      {
        model: Milestone,
        attributes: ['id', 'title', 'description', 'due_date', 'state'],
      },
    ],
  });
  res.status(200).json(issues);
};

module.exports = { getAllIssues };
