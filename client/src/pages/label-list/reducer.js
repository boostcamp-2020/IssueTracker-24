import { addEdit, changeLabelEdit, editLabel } from '../../utils/edit';

export const INIT_DATA = 'init data';
export const RENEW_LABEL = 'renew label';
export const CHANGE_LABEL_EDIT = 'change label edit';
export const EDIT_LABEL = 'edit label';

const reducer = (state, action) => {
  switch (action.type) {
    case INIT_DATA: {
      const { issues, labels } = action.data;
      return {
        ...state,
        issues: issues,
        labels: addEdit(labels),
      };
    }
    case RENEW_LABEL: {
      const { labels } = action.data;
      return {
        ...state,
        labels: labels,
      };
    }
    case CHANGE_LABEL_EDIT: {
      const id = action.id;
      const changedLabels = changeLabelEdit(state.labels, id);
      return {
        ...state,
        labels: changedLabels,
      };
    }
    case EDIT_LABEL: {
      const { label } = action.data;
      const changedLabels = editLabel(state.labels, label);
      return {
        ...state,
        labels: changedLabels,
      };
    }
  }
};

export default reducer;
