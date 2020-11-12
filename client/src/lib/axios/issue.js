import { getData, patchData, postData } from './request';

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

export const createIssue = async (body) => {
  const issue = await postData(url.CREATE_ISSUE, body);
  return issue;
};
