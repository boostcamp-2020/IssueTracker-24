import { getData } from './request';

const url = {
  GET_ALL_ISSUES: 'issues',
  GET_ISSUES: 'issues/',
};

export const getAllIssues = async () => {
  const issues = await getData(url.GET_ALL_ISSUES);
  return issues;
};

export const getIssue = async (id) => {
  const issue = await getData(`${url.GET_ISSUES}${id}`);
  return issue;
};
