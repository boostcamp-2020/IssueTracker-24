export const INIT_DATA = 'init data';
export const ROUTING_LABEL = 'routing label';
const reducer = (state, action) =>{
  switch(action.type){
      case INIT_DATA:{
        return{
            ...state,
            milestones: action.milestones,
        }
      }
      case ROUTING_LABEL:{
        return{
          ...state,
          labelColor:action.labelColor,
          labelFontColor:action.labelFontColor,
        }
      }     
  }
}
export default reducer;