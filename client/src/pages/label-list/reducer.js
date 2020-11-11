export const INIT_DATA = 'init data';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
  }
};

export default reducer;
