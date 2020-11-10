const AUTHOR_POSITION = 1;

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
