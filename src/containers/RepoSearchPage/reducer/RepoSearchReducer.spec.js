import RepoSearchReducer from './RepoSearchReducer';
import { actionTypes } from '../RepoSearchConstants';

const initialState = {
  results: [],
  error: '',
  loading: false,
};

describe('RepoSearchReducer', () => {
  describe('UPDATE_RESULTS', () => {
    it('should update the results', () => {
      const newState = RepoSearchReducer(initialState, { type: actionTypes.UPDATE_RESULTS, items: ['foo'] });
      expect(newState.results).toEqual(['foo']);
    });
  });
  describe('REQUEST_COMPLETE', () => {
    it('should update the error and loading props', () => {
      const newState = RepoSearchReducer({ initialState, loading: true }, { type: actionTypes.REQUEST_COMPLETE, error: 'foo' });
      expect(newState.error).toEqual('foo');
      expect(newState.loading).toEqual(false);
    });
  });
  describe('REQUEST_START', () => {
    it('should update loading', () => {
      const newState = RepoSearchReducer(initialState, { type: actionTypes.REQUEST_START });
      expect(newState.loading).toEqual(true);
    });
  });
});
