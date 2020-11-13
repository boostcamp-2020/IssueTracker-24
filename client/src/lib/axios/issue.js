import { getData, patchData, postData, putData, deleteData} from './request';

const url = {
  GET_ALL_ISSUES: 'issues',
  GET_ISSUES: 'issues/',
  PATCH_ISSUE: 'issues/',
  CREATE_ISSUE: 'issues',
};

export const getAllIssues = async () => {
  const issues = await getData(url.GET_ALL_ISSUES);
  return issues;
};

export const getIssue = async (id) => {
  const issue = await getData(`${url.GET_ISSUES}${id}`);
  return issue;
};

export const patchIssue = async (id, body) => {
  const issue = await patchData(`${url.PATCH_ISSUE}${id}`, body);
  return issue;
};

export const createComment = async (id, body) => {
  const comment = await postData(`issues/${id}/comments`, body);
  return comment;
};

export const createIssue = async (body) => {
  const issue = await postData(url.CREATE_ISSUE, body);
  return issue;
};

export const addAssignee = async (issueId, userId) => {
  const issue = await putData(`issues/${issueId}/users/${userId}`);
  return issue;
};

export const removeAssignee = async (issueId, userId) => {
  const issue = await deleteData(`issues/${issueId}/users/${userId}`);
  return issue;
};

export const addLabel = async (issueId, labelId) => {
  const issue = await putData(`issues/${issueId}/labels/${labelId}`);
  return issue;
};

export const removeLabel = async (issueId, labelId) => {
  const issue = await deleteData(`issues/${issueId}/labels/${labelId}`);
  return issue;
};
