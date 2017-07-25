import searchService from '../../../services/search/searchService';

export const fetchRepos = () => async (dispatch) => {
  const { items } = await searchService.repoSearch();
};
