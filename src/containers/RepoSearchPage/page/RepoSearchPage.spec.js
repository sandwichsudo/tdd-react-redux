import React from 'react';
import { mount } from 'enzyme';
import { RepoSearchPage } from './RepoSearchPage';

describe('<RepoSearchPage />', () => {
  let props = {};
  let repoDataMock = {
    name: 'foo',
    id: 'bar',
    stargazers_count: '5'
  };
  beforeEach(() => {

    props = {
      actions: {
        fetchRepos: jest.fn(),
      },
      searchResults: [ repoDataMock ]
    };
  });

  describe('componentWillMount', () => {
    it('should call fetchRepos', () => {
      mount(<RepoSearchPage {...props} />);
      expect(props.actions.fetchRepos).toHaveBeenCalled();
    });
  });

});
