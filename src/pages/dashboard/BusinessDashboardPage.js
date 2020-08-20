import React, { Suspense, lazy } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

const BusinessDashboardContainer = lazy(() =>
  import('../../containers/dashboard/BusinessDashboardContainer'),
);

const BusinessDashboardPage = ({ match }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={match.url} component={BusinessDashboardContainer} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(BusinessDashboardPage);
