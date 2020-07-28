import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import BranchPostContainer from '../../containers/branch/BranchPostContainer';
import BranchListContainer from '../../containers/branch/BranchListContainer';
import BranchDetailContainer from '../../containers/branch/BranchDetailContainer';

const BranchPage = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={BranchListContainer} exact />
      <Route path={`${match.url}/post`} component={BranchPostContainer} />
      <Route path={`${match.url}/:no`} component={BranchDetailContainer} />
    </div>
  );
};

export default BranchPage;
