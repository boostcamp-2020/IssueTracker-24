import { getData, deleteData } from './request';

const url = {
  GET_ALL_LABELS: 'labels',
  DELETE_LABEL: 'labels/',
};

export const getAllLabels = async () => {
  const labels = await getData(url.GET_ALL_LABELS);
  return labels;
};

export const deleteLabel = async (id) => {
  const label = await deleteData(`${url.DELETE_LABEL}${id}`);
  return label;
};
