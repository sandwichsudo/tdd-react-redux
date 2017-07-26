import RepoSearchReducer from './RepoSearchReducer';
import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
  error: '',
};

describe('RepoSearchReducer', () => {
  describe('UPDATE_RESULTS', () => {
    it('should update the results', () => {
      const newState = RepoSearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, items: ['foo'] });
      expect(newState.results).toEqual(['foo']);
    });
  });
  describe('REQUEST_COMPLETE', () => {
    it('should update the error', () => {
      const newState = RepoSearchReducer(initialState, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.error).toEqual('foo');
    });
  });
});
