import React from 'react';
import { shallow } from 'enzyme';
import RepoResultsList from './RepoResultsList';

describe('<RepoResultsList />', () => {
  let props = {};
  let repoDataMock1 = {
    name: 'foo',
    id: 'bar',
    stargazers_count: '5'
  };
  let repoDataMock2 = {
    name: 'baz',
    id: 'bing',
    stargazers_count: '15'
  };
  beforeEach(() => {

    props = {
      actions: {
        fetchRepos: jest.fn(),
      },
      repos: [ repoDataMock1, repoDataMock2 ]
    };
  });

  describe('RepoResultsList', () => {
    it('should have list item for each repo', () => {
      const wrapper = shallow(<RepoResultsList {...props} />);
      expect(wrapper.find('li').length).toEqual(2);
    });
  });

});
