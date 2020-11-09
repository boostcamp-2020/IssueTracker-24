import { getData, postData } from './request';

const url = {
  GET_ALL_MILESTONES: 'milestones',
  CREATE_MILESTONE: 'milestones',
};

export const getAllMilestones = async () => {
  const milestones = await getData(url.GET_ALL_MILESTONES);
  return milestones;
};

export const createMilestone = async (body) => {
  const milestone = await postData(url.CREATE_MILESTONE, body);
  return milestone;
};
