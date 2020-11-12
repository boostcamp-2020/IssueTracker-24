export const INIT_DATA = 'init data';
export const SET_ASSIGNEES = 'add assignees';
export const SET_LABELS = 'add labels';
export const SET_MILESTONE = 'set milestone';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...state,
        ...action.data,
      };
    case SET_ASSIGNEES:
      return {
        ...state,
        addedAssignees: action.toAdd,
      };
    case SET_LABELS:
      return {
        ...state,
        addedLabels: action.toAdd,
      };
    case SET_MILESTONE:
      return {
        ...state,
        addedMilestone: action.toAdd,
      };
  }
};

export default reducer;
