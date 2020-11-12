export const INIT_DATA = 'init data';
export const REMOVE_LABEL = 'remove label';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    case REMOVE_LABEL: {
      return {
        ...state,
        labels: state.labels.filter((label) => label.id !== action.id),
      };
    }
  }
};

export default reducer;
