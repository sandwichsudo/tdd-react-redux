/* eslint import/no-named-as-default: 0 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import
  RepoSearchPage
 from './containers/RepoSearchPage/page/RepoSearchPage';

export default (
  <Route path="/">
    <IndexRoute component={RepoSearchPage} />
  </Route>
);
