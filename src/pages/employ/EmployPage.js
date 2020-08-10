import React from 'react';
import EmployListContainer from '../../containers/employ/EmployListContainer';
import { Route, withRouter } from 'react-router-dom';
import EmployDetailContainer from '../../containers/employ/EmployDetailContainer';
const EmployPage = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={EmployListContainer} exact />
      <Route path={`${match.url}/:no`} component={EmployDetailContainer} />
    </div>
  );
};

export default withRouter(EmployPage);
