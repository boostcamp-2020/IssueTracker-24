import { getData } from './request';

const url = {
  GET_ALL_ISSUES: 'issues',
};

export const getAllIssues = async () => {
  const issues = await getData(url.GET_ALL_ISSUES);
  return issues;
};
