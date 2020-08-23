import React, { Suspense, lazy } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BusinessDashboardContainer = lazy(() =>
  import('../../containers/dashboard/BusinessDashboardContainer'),
);

const EmployDashboardContainer = lazy(() =>
  import('../../containers/dashboard/EmployDashboardContainer'),
);

const DashboardPage = ({ match }) => {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={match.url} component={EmployDashboardContainer} />
          {/* {user !== null ? (
            user.type === 'B' ? (
              <BusinessDashboardContainer />
            ) : (
              user.type === 'E'(<EmployDashboardContainer />)
            )
          ) : (
            <div></div>
          )} */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default withRouter(DashboardPage);
