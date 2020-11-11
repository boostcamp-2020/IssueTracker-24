const { Issue, User, Label, Milestone, Comment } = require('../models');

const getIssue = async (id) => {
  const issue = await Issue.findByPk(id, {
    attributes: ['id', 'title', 'content', 'state', 'created_at', 'closed_at'],
    include: [
      {
        model: User,
        attributes: ['id', 'user_id', 'sns_id', 'profile_image'],
      },
      {
        model: Label,
        as: 'labels',
        attributes: ['id', 'title', 'description', 'color'],
        through: { attributes: [] },
      },
      {
        model: User,
        as: 'assignees',
        attributes: ['id', 'user_id', 'sns_id', 'profile_image'],
        through: { attributes: [] },
      },
      {
        model: Milestone,
        attributes: ['id', 'title', 'description', 'due_date', 'state'],
      },
      {
        model: Comment,
        as: 'comments',
        attributes: ['id', 'content', 'created_at'],
        include: [{ model: User }],
      },
    ],
  });
  return issue;
};

module.exports = { getIssue };
