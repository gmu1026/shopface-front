import React, { Suspense, lazy } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';

const EmployDashboardContainer = lazy(() =>
  import('../../containers/dashboard/EmployDashboardContainer'),
);

const EmployDashboardPage = ({ match }) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={match.url} component={EmployDashboardContainer} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(EmployDashboardPage);
