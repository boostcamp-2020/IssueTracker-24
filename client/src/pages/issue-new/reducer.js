export const INIT_DATA = 'init data';
export const ADD_ASSIGNEES = 'add assignees';
export const ADD_LABELS = 'add labels';
export const SET_MILESTONE = 'set milestone';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA:
      return {
        ...state,
        ...action.data,
      };
    case ADD_ASSIGNEES:
      return {
        ...state,
        addedAssignees: [...state.addedAssignees, ...action.toAdd],
      };
    case ADD_LABELS:
      return {
        ...state,
        addedLabels: [...state.addedLabels, ...action.toAdd],
      };
    case SET_MILESTONE:
      return {
        ...state,
        addedMilestone: action.toAdd,
      };
  }
};

export default reducer;
