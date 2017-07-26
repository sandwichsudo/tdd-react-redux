import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return { ...state, results: action.items };
    }
    case actionTypes.REQUEST_COMPLETE: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};
