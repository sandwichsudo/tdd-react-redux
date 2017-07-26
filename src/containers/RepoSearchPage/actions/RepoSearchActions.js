import searchService from '../../../services/search/searchService';
import { actionTypes } from '../RepoSearchConstants';

export const fetchRepos = () => async (dispatch) => {
  let error = '';
  dispatch({
    type: actionTypes.REQUEST_START,
  });
  try {
    const { items } = await searchService.repoSearch();
    dispatch({
      type: actionTypes.UPDATE_RESULTS,
      items,
    });
  }
  catch ({ message }) {
    error = message;
  }
  dispatch({
    type: actionTypes.REQUEST_COMPLETE,
    error,
  });
};
