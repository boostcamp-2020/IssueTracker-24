export const CHECK_ISSUE = 'check issue';
export const UNCHECK_ISSUE = 'uncheck issue';
export const INIT_DATA = 'init data';
export const FILTER_YOUR_ISSUE = 'filter issues written by current user';

const reducer = (state, action) => {
  switch (action.type) {
    case CHECK_ISSUE: {
      const checkedIssues = [...state.checkedIssues, action.id];
      return {
        ...state,
        checkedIssues,
      };
    }
    case UNCHECK_ISSUE: {
      const checkedIssues = state.checkedIssues.filter((id) => id != action.id);
      return {
        ...state,
        checkedIssues,
      };
    }
    case INIT_DATA: {
      const { issues, labels, milestones, currentUser } = action.data;
      const renderedIssues = [...issues];
      return {
        ...state,
        issues,
        labels,
        milestones,
        renderedIssues,
        currentUser,
      }; // TODO: add users
    }
    case FILTER_YOUR_ISSUE: {
      const renderedIssues = state.issues.filter(
        (issue) => issue.user.id === action.id,
      );
      return { ...state, renderedIssues };
    }
  }
};

export default reducer;
