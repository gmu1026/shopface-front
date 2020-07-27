import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import BranchPostContainer from '../../containers/branch/BranchPostContainer';
import BranchListContainer from '../../containers/branch/BranchListContainer';
import postCode from '../../containers/branch/BranchPostContainer';

const BranchPage = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={BranchListContainer} exact />
      <Route path={`${match.url}/post`} component={postCode} />
    </div>
  );
};

export default BranchPage;
