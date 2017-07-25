import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RepoResultsList from '../components/RepoResultsList/RepoResultsList';
import * as RepoSearchActions from '../actions/RepoSearchActions';

export class RepoSearchPage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.fetchRepos();
  }

  render() {
    return (
      <div>
        <h1>Top Javascript Repos</h1>
        <RepoResultsList repos={this.props.searchResults}/>
      </div>
    );
  }
}

RepoSearchPage.propTypes = {
  searchResults: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  searchResults: state.repoSearch.results,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RepoSearchActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearchPage);
