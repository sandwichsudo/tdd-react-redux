import RepoSearchReducer from './RepoSearchReducer';
import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
};

describe('RepoSearchReducer', () => {
  describe('UPDATE_RESULTS', () => {
    it('should update the results', () => {
      const newState = RepoSearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, items: ['foo'] });
      expect(newState.results).toEqual(['foo']);
    });
  });
});
