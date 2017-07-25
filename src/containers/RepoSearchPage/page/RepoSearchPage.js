import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoResultsList from '../components/RepoResultsList/RepoResultsList';

export class RepoSearchPage extends Component {
  constructor(props) {
    super(props);
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
};

const mapStateToProps = state => ({
  searchResults: state.repoSearch.results,
});

export default connect(mapStateToProps)(RepoSearchPage);
