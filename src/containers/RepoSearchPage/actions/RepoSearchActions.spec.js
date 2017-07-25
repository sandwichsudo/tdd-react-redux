import { fetchRepos } from './RepoSearchActions';
import searchService from '../../../services/search/searchService';

jest.mock('../../../services/search/searchService');

describe('repo search actions', () => {
  describe('fetchRepos', () => {
    it('should call searchService.repoSearch', async () => {
      searchService.__setMockReposSearch(Promise.resolve({
        items: 'foo',
      }));

      const dispatch = jest.fn();
      await fetchRepos()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
    });
  });
});
