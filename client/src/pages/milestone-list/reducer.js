export const INIT_DATA = 'init data';
const reducer = (state, action) =>{
  switch(action.type){
      case INIT_DATA:{
        return{
            ...state,
            milestones: action.milestones,
        }
      }     
  }
}
export default reducer;