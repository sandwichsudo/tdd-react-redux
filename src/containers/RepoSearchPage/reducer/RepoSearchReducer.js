import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return { ...state, results: action.items };
    }
    case actionTypes.REQUEST_COMPLETE: {
      return { ...state, error: action.error, loading: false };
    }
    case actionTypes.REQUEST_START: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
};
