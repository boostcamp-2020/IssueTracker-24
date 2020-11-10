import { getData, postData, putData } from './request';

const url = {
  GET_ALL_MILESTONES: 'milestones',
  CREATE_MILESTONE: 'milestones',
  GET_MILESTONE: 'milestones/',
  UPDATE_MILESTONE: 'milestones/',
};

export const getAllMilestones = async () => {
  const milestones = await getData(url.GET_ALL_MILESTONES);
  return milestones;
};

export const createMilestone = async (body) => {
  const milestone = await postData(url.CREATE_MILESTONE, body);
  return milestone;
};

export const getMilestone = async (id) => {
  const milestone = await getData(`${url.GET_MILESTONE}${id}`);
  return milestone;
};

export const updateMilestone = async (id, body) => {
  const milestone = await putData(`${url.GET_MILESTONE}${id}`, body);
  return milestone;
};
