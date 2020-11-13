export const addEdit = (labels) => {
  const newLabels = labels.map((label) => {
    return { ...label, edit: false };
  });

  return newLabels;
};

export const changeLabelEdit = (labels, id) => {
  const changedLabels = [...labels];
  changedLabels.forEach((label) => {
    if (label.id === id) label.edit = !label.edit;
  });

  return changedLabels;
};

export const editLabel = (labels, changedLabel) => {
  const changedLabels = [...labels];
  changedLabels.forEach((label) => {
    if (label.id === changedLabel.id) {
      label.title = changedLabel.title;
      label.description = changedLabel.description;
      label.color = changedLabel.color;
      label.edit = false;
    }
  });

  return changedLabels;
};
