export const CHECK_ISSUE = 'check issue';
export const UNCHECK_ISSUE = 'uncheck issue';

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
  }
};

export default reducer;
