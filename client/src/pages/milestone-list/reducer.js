export const INIT_DATA = 'init data';
export const ROUTING_LABEL = 'routing label';
export const FILTERING_MILESTONE ='filtering milestone';
const reducer = (state, action) =>{
  switch(action.type){
      case INIT_DATA:{
        return{
            ...state,
            milestones:action.milestones,
            milestoneList:action.milestoneList
        }
      }
      case ROUTING_LABEL:{
        return{
          ...state,
          labelColor:action.labelColor,
          labelFontColor:action.labelFontColor,
        }
      }
      case FILTERING_MILESTONE:{
        return{
          ...state,
          openclosedState:action.openclosedState,
          milestoneList:action.milestoneList
        }
      }     
  }
}
export default reducer;