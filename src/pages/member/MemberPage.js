import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MemberDetailContainer from '../../containers/member/MemberDetailContainer';
import MemberListContainer from '../../containers/member/MemberListContainer';
const MemberPage = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={MemberListContainer} exact />
      <Route path={`${match.url}/:id`} component={MemberDetailContainer} />
    </div>
  );
};

export default MemberPage;
