import { getData } from './request';

const url = {
  GET_ALL_LABELS: 'labels',
};

export const getAllLabels = async () => {
  const labels = await getData(url.GET_ALL_LABELS);
  return labels;
};
