const AUTHOR_POSITION = 1;
const ASSIGNEE_POSITION = 1;
const MILESTONE_POSITION = 1;
const LABEL_POSITION = 1;

const filterOpenClose = (issues, searchText) => {
  if (searchText.indexOf('is:open') !== -1) {
    return issues.filter((issue) => issue.state === 'open');
  }
  if (searchText.indexOf('is:close') !== -1) {
    return issues.filter((issue) => issue.state === 'close');
  }

  return issues;
};

const filterAuthor = (issues, searchText, currentUser) => {
  if (searchText.indexOf('author:@me') !== -1) {
    return issues.filter((issue) => issue.user.sns_id === currentUser.sns_id);
  }
  if (searchText.indexOf('author:') !== -1) {
    const splitedText = searchText.split(' ');
    let author = '';
    splitedText.forEach((v) => {
      if (v.indexOf('author:') !== -1) author = v;
    });
    author = author.split(':')[AUTHOR_POSITION];

    return issues.filter((issue) => issue.user.sns_id === author);
  }

  return issues;
};

const filterAssignee = (issues, searchText, currentUser) => {
  if (searchText.indexOf('no:assignee') !== -1) {
    return issues.filter((issue) => issue.assignees.length === 0);
  }

  if (searchText.indexOf('assignee:@me') !== -1) {
    return issues.filter((issue) =>
      issue.assignees.some(
        (assignee) => assignee.sns_id === currentUser.sns_id,
      ),
    );
  }

  if (searchText.indexOf('assignee:') !== -1) {
    const splitedText = searchText.split(' ');
    let assignee = '';
    splitedText.forEach((v) => {
      if (v.indexOf('assignee:') !== -1) assignee = v;
    });
    assignee = assignee.split(':')[ASSIGNEE_POSITION];

    return issues.filter((issue) =>
      issue.assignees.some(
        (issueAssignee) => issueAssignee.sns_id === assignee,
      ),
    );
  }

  return issues;
};

const filterMilestone = (issues, searchText) => {
  if (searchText.indexOf('no:milestone') !== -1) {
    return issues.filter((issue) => issue.milestone === null);
  }
  if (searchText.indexOf('milestone:') !== -1) {
    const splitedText = searchText.split(' ');
    let milestone = '';
    splitedText.forEach((v) => {
      if (v.indexOf('milestone:') !== -1) milestone = v;
    });
    milestone = milestone.split(':')[MILESTONE_POSITION];

    return issues.filter((issue) => {
      if (issue.milestone === null) return false;
      return issue.milestone.title === milestone;
    });
  }

  return issues;
};

const filterLabel = (issues, searchText) => {
  if (searchText.indexOf('no:label') !== -1) {
    return issues.filter((issue) => issue.labels.length === 0);
  }
  if (searchText.indexOf('label:') !== -1) {
    const splitedText = searchText.split(' ');
    const checkLabels = [];
    splitedText.forEach((v) => {
      if (v.indexOf('label:') !== -1)
        checkLabels.push(v.split(':')[LABEL_POSITION]);
    });

    return issues.filter((issue) => {
      let isFilter = true;
      checkLabels.forEach((label) => {
        let isContain = false;
        issue.labels.forEach((issueLabel) => {
          if (issueLabel.title === label) isContain = true;
        });

        if (!isContain) isFilter = false;
      });
      return isFilter;
    });
  }

  return issues;
};

export const filterIssues = (issues, searchText, currentUser) => {
  let filteredIssues = filterOpenClose(issues, searchText);
  filteredIssues = filterAuthor(filteredIssues, searchText, currentUser);
  filteredIssues = filterAssignee(filteredIssues, searchText, currentUser);
  filteredIssues = filterMilestone(filteredIssues, searchText);
  filteredIssues = filterLabel(filteredIssues, searchText);

  return filteredIssues;
};
