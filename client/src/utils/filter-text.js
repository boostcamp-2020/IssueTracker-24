const sliceLast = (array) => array.slice(0, array.length - 1);

export const filterTextByYourIssues = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('author:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = 'author:@me';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'author:@me', ''].join(' ');
  }
};

export const filterTextByOpen = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('is:open') !== -1) {
      index = i;
    } else if (v.indexOf('is:closed') !== -1) {
      index = i;
    }
  });

  if (index !== -1) {
    splitedText[index] = 'is:open';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'is:open', ''].join(' ');
  }
};

export const filterTextByClosed = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('is:open') !== -1) {
      index = i;
    } else if (v.indexOf('is:closed') !== -1) {
      index = i;
    }
  });

  if (index !== -1) {
    splitedText[index] = 'is:closed';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'is:closed', ''].join(' ');
  }
};

export const filterTextByAssignedToYou = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('assignee:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = 'assignee:@me';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'assignee:@me', ''].join(' ');
  }
};

export const filterTextByAuthor = (searchText, author) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('author:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = `author:${author}`;
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), `author:${author}`, ''].join(' ');
  }
};

export const filterTextByNoAssignee = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:assignee') !== -1) index = i;
    else if (v.indexOf('assignee:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = 'no:assignee';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'no:assignee', ''].join(' ');
  }
};

export const filterTextByAssignee = (searchText, assignee) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:assignee') !== -1) index = i;
    else if (v.indexOf('assignee:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = `assignee:${assignee}`;
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), `assignee:${assignee}`, ''].join(' ');
  }
};

export const filterTextByNoMilestone = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:milestone') !== -1) index = i;
    else if (v.indexOf('milestone:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = 'no:milestone';
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), 'no:milestone', ''].join(' ');
  }
};

export const filterTextByMilestone = (searchText, milestone) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:milestone') !== -1) index = i;
    else if (v.indexOf('milestone:') !== -1) index = i;
  });

  if (index !== -1) {
    splitedText[index] = `milestone:${milestone}`;
    return [...splitedText].join(' ');
  } else {
    return [...sliceLast(splitedText), `milestone:${milestone}`, ''].join(' ');
  }
};

export const filterTextByNoLabel = (searchText) => {
  const splitedText = searchText.split(' ');
  let index = -1;
  let indexCount = 0;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:label') !== -1) index = i;
    else if (v.indexOf('label:') !== -1) {
      index = i;
      indexCount += 1;
    }
  });

  if (index !== -1) {
    if (indexCount === 0) return [...splitedText].join(' ');
    return [
      ...sliceLast(splitedText).filter((v) => v.indexOf('label:') === -1),
      'no:label',
      '',
    ].join(' ');
  } else {
    return [...sliceLast(splitedText), 'no:label', ''].join(' ');
  }
};

export const filterTextByLabel = (searchText, label) => {
  const splitedText = searchText.split(' ');

  let noIndex = -1;
  let sameIndex = -1;
  splitedText.forEach((v, i) => {
    if (v.indexOf('no:label') !== -1) {
      noIndex = i;
    }

    if (v.indexOf(`label:${label}`) !== -1) {
      sameIndex = i;
    }
  });

  if (noIndex !== -1) {
    return [
      ...sliceLast(splitedText).filter((v) => v.indexOf('no:label') === -1),
      `label:${label}`,
      '',
    ].join(' ');
  }

  if (sameIndex !== -1) {
    return [
      ...splitedText.filter((v) => v.indexOf(`label:${label}`) === -1),
    ].join(' ');
  }

  return [...sliceLast(splitedText), `label:${label}`, ''].join(' ');
};
