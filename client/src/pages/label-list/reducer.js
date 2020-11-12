export const INIT_DATA = 'init data';
export const RENEW_LABEL = 'renew label';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case RENEW_LABEL: {
      console.log(action.data);
      return {
        ...state,
        ...action.data,
      };
    }
  }
};

export default reducer;
