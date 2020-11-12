const { Issue, User, Label, Milestone, Comment } = require('../models');
const issueService = require('../services/issue');

const getAllIssues = async (req, res, next) => {
  const issues = await Issue.findAll({
    attributes: ['id', 'title', 'content', 'state', 'created_at', 'closed_at'],
    order: [['id', 'DESC']],
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
  const { title, content, user_id, milestone_id, labels, assignees } = { ...req.body };
  const issue = await Issue.create({
    title,
    content,
    user_id,
    milestone_id,
  });

  if (labels) {
    const promises = labels.map((label) => {
      return issue.addLabels(label.id);
    });
    await Promise.all(promises);
  }

  if (assignees) {
    const promises = assignees.map((assignee) => {
      return issue.addAssignees(assignee.id);
    });
    await Promise.all(promises);
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
  const { title, content, state, closed_at, milestone_id } = req.body;
  const patchedIssue = {};
  if (title) patchedIssue.title = title;
  if (content) patchedIssue.content = content;
  if (state) patchedIssue.state = state;
  if (closed_at) patchedIssue.closed_at = new Date(closed_at);
  if (milestone_id || milestone_id == null) patchedIssue.milestone_id = milestone_id;

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

const addAssignee = async (req, res, next) => {
  const { issueId, userId } = req.params;
  try {
    const issue = await Issue.findByPk(issueId);
    await issue.addAssignees(userId);
    const issueResult = await issueService.getIssue(issueId);
    return res.status(200).json(issueResult);
  } catch (err) {
    return next(err);
  }
};

const removeAssignee = async (req, res, next) => {
  const { issueId, userId } = req.params;
  try {
    const issue = await Issue.findByPk(issueId);
    await issue.removeAssignees(userId);
    const issueResult = await issueService.getIssue(issueId);
    return res.status(200).json(issueResult);
  } catch (err) {
    return next(err);
  }
};

const addLabel = async (req, res, next) => {
  const { issueId, labelId } = req.params;
  try {
    const issue = await Issue.findByPk(issueId);
    await issue.addLabels(labelId);
    const issueResult = await issueService.getIssue(issueId);
    return res.status(200).json(issueResult);
  } catch (err) {
    return next(err);
  }
};

const removeLabel = async (req, res, next) => {
  const { issueId, labelId } = req.params;
  try {
    const issue = await Issue.findByPk(issueId);
    await issue.removeLabels(labelId);
    const issueResult = await issueService.getIssue(issueId);
    return res.status(200).json(issueResult);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllIssues,
  createIssue,
  getIssue,
  patchIssue,
  createComment,
  addAssignee,
  removeAssignee,
  addLabel,
  removeLabel,
};
