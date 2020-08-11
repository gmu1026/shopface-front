import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import RegisterContainer from '../../containers/common/RegisterContainer';

const RegisterPage = ({ match }) => {
  return (
    <Route
      path={[match.url, `${match.url}/employ`]}
      component={RegisterContainer}
    />
  );
};

export default RegisterPage;
