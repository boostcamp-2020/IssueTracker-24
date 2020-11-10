const AUTHOR_POSITION = 1;
const ASSIGNEE_POSITION = 1;

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
