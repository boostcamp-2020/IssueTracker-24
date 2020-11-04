import { getData } from './request';

const url = {
  GET_ALL_MILESTONES: 'milestones',
};

export const getAllMilestones = async () => {
  const milestones = await getData(url.GET_ALL_MILESTONES);
  return milestones;
};
