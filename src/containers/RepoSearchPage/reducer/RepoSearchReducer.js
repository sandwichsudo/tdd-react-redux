import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_RESULTS: {
      return { ...state, results: action.items };
    }
    default:
      return state;
  }
};