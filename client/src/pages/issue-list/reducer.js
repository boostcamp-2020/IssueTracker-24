import {
  addChecked,
  changeIssueChecked,
  checkWholeIssues,
} from '../../utils/checkbox';
import {
  filterTextByYourIssues,
  filterTextByOpen,
  filterTextByClosed,
  filterTextByAssignedToYou,
  filterTextByAuthor,
  filterTextByNoAssignee,
  filterTextByAssignee,
  filterTextByNoMilestone,
  filterTextByMilestone,
  filterTextByLabel,
  filterTextByNoLabel,
} from '../../utils/filter-text';
import { filterIssues } from '../../utils/filter-issue';

export const CHECK_ISSUE = 'check issue';
export const INIT_DATA = 'init data';
export const CHECK_WHOLE_ISSUES = 'check whole issues';
export const FILTER_YOUR_ISSUES = 'filter issues written by current user';
export const FILTER_OPEN_ISSUES = 'filter open issues';
export const FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER =
  'filter issues assigned to current user';
export const FILTER_CLOSED_ISSUES = 'filter closed issues';
export const FILTER_ISSUES_BY_AUTHOR = 'filter issues by author';
export const FILTER_ISSUES_BY_ASSIGNEE = 'filter issues by assignee';
export const FILTER_ISSUES_BY_MILESTONE = 'filter issues by milestone';
export const FILTER_ISSUES_BY_LABEL = 'filter issues by label';
export const CLEAR_FILTER_ISSUES = 'clear filter issues';

const reducer = (state, action) => {
  switch (action.type) {
    case CHECK_ISSUE: {
      const newCheckedIssues = changeIssueChecked(
        state.renderedIssues,
        action.id,
      );

      return {
        ...state,
        renderedIssues: newCheckedIssues,
      };
    }
    case INIT_DATA: {
      const { issues, labels, milestones, users, currentUser } = action.data;
      const renderedIssues = filterIssues(
        issues,
        state.searchText,
        currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        issues,
        labels,
        milestones,
        renderedIssues: addedRenderedIssues,
        users,
        currentUser,
      }; // TODO: add users
    }
    case CHECK_WHOLE_ISSUES: {
      const wholeCheck = !action.wholeCheck;
      const checkedRenderedIssues = checkWholeIssues(
        state.renderedIssues,
        wholeCheck,
      );

      return {
        ...state,
        renderedIssues: checkedRenderedIssues,
        wholeCheck: wholeCheck,
      };
    }
    case FILTER_YOUR_ISSUES: {
      const searchText = filterTextByYourIssues(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_OPEN_ISSUES: {
      const searchText = filterTextByOpen(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_ASSIGNED_TO_CURRENT_USER: {
      const searchText = filterTextByAssignedToYou(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_CLOSED_ISSUES: {
      const searchText = filterTextByClosed(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_AUTHOR: {
      const searchText = filterTextByAuthor(state.searchText, action.author);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_ASSIGNEE: {
      const searchText = action.assignee
        ? filterTextByAssignee(state.searchText, action.assignee)
        : filterTextByNoAssignee(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_MILESTONE: {
      const searchText = action.milestone
        ? filterTextByMilestone(state.searchText, action.milestone)
        : filterTextByNoMilestone(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_LABEL: {
      const searchText = action.label
        ? filterTextByLabel(state.searchText, action.label)
        : filterTextByNoLabel(state.searchText);

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
    case CLEAR_FILTER_ISSUES: {
      const searchText = 'is:open is:issue ';

      const renderedIssues = filterIssues(
        state.issues,
        searchText,
        state.currentUser,
      );
      const addedRenderedIssues = addChecked(renderedIssues);
      return {
        ...state,
        searchText,
        renderedIssues: addedRenderedIssues,
        wholeCheck: false,
      };
    }
  }
};

export default reducer;
