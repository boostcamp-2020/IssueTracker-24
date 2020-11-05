export const CHECK_ISSUE = 'check issue';
export const UNCHECK_ISSUE = 'uncheck issue';
export const INIT_DATA = 'init data';
export const CHECK_WHOLE_ISSUES = 'check whole issues';
export const FILTER_YOUR_ISSUES = 'filter issues written by current user';
export const FILTER_OPEN_ISSUES = 'filter open issues';
export const FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER =
  'filter issues assigned to current user';
export const FILTER_CLOSED_ISSUES = 'filter closed issues';

const reducer = (state, action) => {
  switch (action.type) {
    case CHECK_ISSUE: {
      const newCheckedIssues = state.checkedIssues.filter(
        (checkedIssue) => checkedIssue.id !== action.id,
      );
      const checkedIssues = [
        ...newCheckedIssues,
        { id: action.id, checked: true },
      ];

      return {
        ...state,
        checkedIssues,
      };
    }
    case UNCHECK_ISSUE: {
      const newCheckedIssues = state.checkedIssues.filter(
        (checkedIssue) => checkedIssue.id !== action.id,
      );
      const checkedIssues = [
        ...newCheckedIssues,
        { id: action.id, checked: false },
      ];

      return {
        ...state,
        checkedIssues,
      };
    }
    case INIT_DATA: {
      const { issues, labels, milestones, currentUser, checkedIssues } = action.data;
      const renderedIssues = [...issues];
      return {
        ...state,
        issues,
        labels,
        milestones,
        renderedIssues,
        currentUser,
        checkedIssues,
      }; // TODO: add users
    }
    case CHECK_WHOLE_ISSUES: {
      const wholeCheck = !action.wholeCheck;
      const checkedIssues = state.checkedIssues.map((checkedIssue) => ({
        id: checkedIssue.id,
        checked: wholeCheck,
      }));

      console.dir(checkedIssues);

      return { ...state, checkedIssues, wholeCheck: wholeCheck };

    }
    case FILTER_YOUR_ISSUES: {
      const renderedIssues = state.issues.filter(
        (issue) => issue.user.id === Number(action.id),
      );
      return { ...state, renderedIssues };
    }
    case FILTER_OPEN_ISSUES: {
      const renderedIssues = state.issues.filter(
        (issue) => issue.state === 'open',
      );
      return { ...state, renderedIssues };
    }
    case FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER: {
      const renderedIssues = state.issues.filter((issue) =>
        issue.assignees.some((assignee) => assignee.id === Number(action.id)),
      );
      return { ...state, renderedIssues };
    }
    case FILTER_CLOSED_ISSUES: {
      const renderedIssues = state.issues.filter(
        (issue) => issue.state === 'close',
      );
      return { ...state, renderedIssues };
    }
  }
};

export default reducer;
