const CHECKED_ISSUE_INDEX = 0;

export const addChecked = (renderedIssues) => {
  const newRenderedIssues = renderedIssues.map((issue) => {
    return { ...issue, checked: false };
  });

  return newRenderedIssues;
};

export const changeIssueChecked = (renderedIssues, id) => {
  const changedIssues = [...renderedIssues];
  changedIssues.forEach((issue) => {
    if (issue.id === id) issue.checked = !issue.checked;
  });

  return changedIssues;
};

export const checkWholeIssues = (renderedIssues, wholeCheck) => {
  const changedIssues = [...renderedIssues];
  changedIssues.forEach((issue) => {
    issue.checked = wholeCheck;
  });

  return changedIssues;
};
