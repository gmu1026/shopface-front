import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { getMemberList } from '../../modules/member/memberList';

const MemberListContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { members, memberError, loading, user } = useSelector(
    ({ memberList, loading, auth }) => ({
      members: memberList.members,
      memberError: memberList.memberError,
      loading: loading,
      user: auth.user,
    }),
  );

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getMemberList());
    }
  }, [dispatch, history, user]);

  return (
    <MemberListForm
      members={members}
      memberError={memberError}
      loading={loading}
    ></MemberListForm>
  );
};

export default withRouter(MemberListContainer);
