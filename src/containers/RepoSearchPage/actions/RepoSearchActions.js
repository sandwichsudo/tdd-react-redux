import searchService from '../../../services/search/searchService';
import { actionTypes } from '../RepoSearchConstants';

export const fetchRepos = () => async (dispatch) => {
  const { items } = await searchService.repoSearch();
  dispatch({
    type: actionTypes.UPDATE_RESULTS,
    items,
  });
};
