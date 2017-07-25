import React from 'react';
import PropTypes from 'prop-types';

const RepoResultsList = ({ repos }) => (
  <ul>
    {repos.map(repo => <li key={repo.id}>{repo.name}: {repo.stargazers_count} stars</li>)}
  </ul>
);

RepoResultsList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoResultsList;
