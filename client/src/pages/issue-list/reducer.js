export const CHECK_ISSUE = 'check issue';
export const UNCHECK_ISSUE = 'uncheck issue';
export const INIT_DATA = 'init data';
export const CHECK_WHOLE_ISSUES = 'check whole issues';

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
      const data = action.data;
      const issues = [...state.issues, ...data.issues];
      const labels = [...state.labels, ...data.labels];
      const milestones = [...state.milestones, ...data.milestones];
      const checkedIssues = [...state.checkedIssues, ...data.checkedIssues];

      // const users = [...state.users, ...data.users]; // TODO
      return { ...state, issues, labels, milestones, checkedIssues }; // TODO: add users
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
  }
};

export default reducer;
