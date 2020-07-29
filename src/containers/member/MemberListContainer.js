import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import { getMemberList } from '../../modules/member/memberList';

const MemberListContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { members, memberError, loading } = useSelector(
    ({ memberList, loading }) => ({
      members: memberList.members,
      memberError: memberList.memberError,
      loading: loading,
    }),
  );

  useEffect(() => {
    dispatch(getMemberList());
  }, [dispatch, history]);

  return (
    <MemberListForm
      members={members}
      memberError={memberError}
      loading={loading}
    ></MemberListForm>
  );
};

export default withRouter(MemberListContainer);
