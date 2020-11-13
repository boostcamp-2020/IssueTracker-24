import milestone from '../../../../server/src/models/milestone';

export const INIT_DATA = 'init data';
export const ROUTING_LABEL = 'routing label';
export const FILTERING_MILESTONE = 'filtering milestone';
export const DELETE_MILESTONE = 'delete milestone';
export const CHANGE_STATE = 'change state';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA: {
      return {
        ...state,
        milestones: action.milestones,
        milestoneList: action.milestoneList,
        issues: action.issues,
        display: action.display,
      };
    }
    case ROUTING_LABEL: {
      return {
        ...state,
        labelColor: action.labelColor,
        labelFontColor: action.labelFontColor,
      };
    }
    case FILTERING_MILESTONE: {
      return {
        ...state,
        openclosedState: action.openclosedState,
        milestoneList: action.milestoneList,
      };
    }
    case DELETE_MILESTONE: {
      return {
        ...state,
        display: action.display,
        milestoneId: action.milestoneId,
      };
    }
    case CHANGE_STATE: {
      const milestones = state.milestones.map((milestone) => {
        if (milestone.id != action.patchedMilestone.id) return milestone;
        else return action.patchedMilestone;
      });
      const milestoneList = milestones.filter(
        (milestone) => milestone.state != action.patchedMilestone.state,
      );
      return {
        ...state,
        milestoneList,
        milestones,
      };
    }
  }
};
export default reducer;
