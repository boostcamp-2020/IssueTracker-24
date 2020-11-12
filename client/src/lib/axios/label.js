import { getData, postData } from './request';

const url = {
  GET_ALL_LABELS: 'labels',
  POST_LABEL: 'labels',
};

export const getAllLabels = async () => {
  const labels = await getData(url.GET_ALL_LABELS);
  return labels;
};

export const createLabel = async (body) => {
  const label = await postData(url.POST_LABEL, body);
  return label;
};
