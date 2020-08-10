import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const RegisterContainer = lazy(() =>
  import('../../containers/common/RegisterContainer'),
);
const RegisterCheckContainer = lazy(() =>
  import('../../containers/common/RegisterCheckContainer'),
);

const RegisterPage = ({ match }) => {
  console.log(match.url);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={[match.url, `${match.url}/employ`]}
          component={RegisterContainer}
        />
        <Route path={`${match.url}/check`} component={RegisterCheckContainer} />
      </Switch>
    </Suspense>
  );
};

export default RegisterPage;
