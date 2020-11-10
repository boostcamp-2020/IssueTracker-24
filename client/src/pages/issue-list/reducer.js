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
} from '../../utils/filter-text';

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
      const { issues, labels, milestones, users } = action.data;
      const addedRenderedIssues = addChecked(issues);
      const renderedIssues = [...addedRenderedIssues];
      return {
        ...state,
        issues,
        labels,
        milestones,
        renderedIssues,
        users,
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

      const renderedIssues = state.issues.filter(
        (issue) => issue.user.id === Number(action.id),
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

      const renderedIssues = state.issues.filter(
        (issue) => issue.state === 'open',
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

      const renderedIssues = state.issues.filter((issue) =>
        issue.assignees.some((assignee) => assignee.id === Number(action.id)),
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

      const renderedIssues = state.issues.filter(
        (issue) => issue.state === 'close',
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
      //[TODO] renderedIssues 생성
      //[TODO] addChecked
      return {
        ...state,
        searchText,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_ASSIGNEE: {
      const searchText = action.assignee
        ? filterTextByAssignee(state.searchText, action.assignee)
        : filterTextByNoAssignee(state.searchText);

      return {
        ...state,
        searchText,
        wholeCheck: false,
      };
    }
    case FILTER_ISSUES_BY_MILESTONE: {
      const searchText = action.milestone
        ? filterTextByMilestone(state.searchText, action.milestone)
        : filterTextByNoMilestone(state.searchText);

      return {
        ...state,
        searchText,
        wholeCheck: false,
      };
    }
  }
};

export default reducer;
