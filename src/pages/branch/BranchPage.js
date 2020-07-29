import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import BranchDetailContainer from '../../containers/branch/BranchDetailContainer';
import BranchListContainer from '../../containers/branch/BranchListContainer';
import BranchPostContainer from '../../containers/branch/BranchPostContainer';

const BranchPage = ({ match }) => {
  return (
    <div>
      <Switch>
        <Route path={match.url} component={BranchListContainer} exact />
        <Route path={`${match.url}/post`} component={BranchPostContainer} />
        <Route path={`${match.url}/:no`} component={BranchDetailContainer} />
      </Switch>
    </div>
  );
};

export default withRouter(BranchPage);
