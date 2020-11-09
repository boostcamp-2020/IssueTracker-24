const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_DATA':
      return {
        ...state,
        ...action.data,
      };
    case 'ADD_ASSIGNEE':
      return {
        ...state,
        addedAssignees: [state.addedAssignees, action.assignee],
      };
    case 'ADD_LABEL':
      return {
        ...state,
        addedLabels: [state.addedLabels, action.label],
      };
    case 'SET_MILESTONE':
      return {
        ...state,
        addedMilestone: action.milestone,
      };
  }
};

export default reducer;
