export const CHECK_ISSUE = 'check issue';
export const UNCHECK_ISSUE = 'uncheck issue';
export const INIT_DATA = 'init data';

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
      const data = action.data;
      const issues = [...state.issues, ...data.issues];
      const labels = [...state.labels, ...data.labels];
      const milestones = [...state.milestones, ...data.milestones];
      // const users = [...state.users, ...data.users]; // TODO
      return { ...state, issues, labels, milestones }; // TODO: add users
    }
  }
};

export default reducer;
