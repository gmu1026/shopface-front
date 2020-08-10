import React from 'react';
import RegisterContainer from '../../containers/common/RegisterContainer';
import { Route } from 'react-router-dom';
import RegisterCheckContainer from '../../containers/common/RegisterCheckContainer';

const RegisterPage = ({ match }) => {
  console.log(match.url);
  return (
    <>
      <Route
        path={[match.url, `${match.url}/employ`]}
        component={RegisterContainer}
      />
      <Route path={`${match.url}/check`} component={RegisterCheckContainer} />
    </>
  );
};

export default RegisterPage;
