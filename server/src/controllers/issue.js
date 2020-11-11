const { Issue, User, Label, Milestone, Comment } = require('../models');
const issueService = require('../services/issue');

const getAllIssues = async (req, res, next) => {
  const issues = await Issue.findAll({
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
    ],
  });
  res.status(200).json(issues);
};
const createIssue = async (req, res, next) => {
  const { title, content, user_id, milestone_id, labels } = { ...req.body };
  const issue = await Issue.create({
    title,
    content,
    user_id,
    milestone_id,
  });

  if (labels) {
    const promises = labels.map((label) => {
      return issue.addLabels(label);
    });
    Promise.all(promises);
  }

  res.status(200).json(issue);
};

const getIssue = async (req, res, next) => {
  const { id } = req.params;
  const issue = await issueService.getIssue(id);
  res.status(200).json(issue);
};

const patchIssue = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, state, closed_at } = req.body;
  const patchedIssue = {};
  if (title) patchedIssue.title = title;
  if (content) patchedIssue.content = content;
  if (state) patchedIssue.state = state;
  if (closed_at) patchedIssue.closed_at = new Date(closed_at);

  await Issue.update(patchedIssue, { where: { id } });
  const issue = await issueService.getIssue(id);
  return res.status(200).json(issue);
};

const createComment = async (req, res, next) => {
  const issueId = req.params.id;
  const { content, user_id } = req.body;
  const issue = await Issue.findByPk(issueId);
  const { id } = await issue.createComment({ content, user_id });
  const comment = await Comment.findByPk(id, { include: [{ model: User }] });
  res.status(201).json(comment);
};
module.exports = { getAllIssues, createIssue, getIssue, patchIssue, createComment };
