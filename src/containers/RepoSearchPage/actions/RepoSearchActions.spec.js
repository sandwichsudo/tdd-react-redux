import { fetchRepos } from './RepoSearchActions';
import searchService from '../../../services/search/searchService';
import { actionTypes } from '../RepoSearchConstants';

jest.mock('../../../services/search/searchService');

describe('repo search actions', () => {
  describe('fetchRepos', () => {
    it('should call searchService.repoSearch and dispatch actions', async () => {
      searchService.__setMockReposSearch(Promise.resolve({
        items: 'foo',
      }));
      const dispatch = jest.fn();
      await fetchRepos()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
      expect(dispatch.mock.calls).toEqual([
        [{ type: actionTypes.UPDATE_RESULTS, items: 'foo' }],
        [{ type: actionTypes.REQUEST_COMPLETE, error: '' }]
      ]);
    });

    it('should dispatch error action when service throws and exception', async () => {
      searchService.__setMockReposSearch(Promise.reject({
        message: 'Something went wrong',
      }));
      const dispatch = jest.fn();
      await fetchRepos()(dispatch);
      expect(searchService.repoSearch).toHaveBeenCalled();
      expect(dispatch.mock.calls).toEqual([
        [{ type: actionTypes.REQUEST_COMPLETE, error: 'Something went wrong' }]
      ]);
    });
  });
});
