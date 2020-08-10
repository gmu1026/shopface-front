import React, { useEffect } from 'react';
import MemberDetailForm from '../../components/member/MemberDetailForm';
import { useSelector, useDispatch } from 'react-redux';
import { getMemberDetail } from '../../modules/member/memberDetail';
import { checkExpire, logout } from '../../lib/api/common/authAPI';
import { withRouter } from 'react-router-dom';

const MemberDetailContainer = ({ match }) => {
  const dispatch = useDispatch();
  const { member, user } = useSelector(({ memberDetail, auth }) => ({
    member: memberDetail.member,
    user: auth.user,
  }));

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      const url = match.url;
      const no = url.substring(url.lastIndexOf('/') + 1);

      dispatch(getMemberDetail({ no }));
    }
  }, [dispatch, match.url, user]);

  return (
    <div>
      <MemberDetailForm member={member}></MemberDetailForm>
    </div>
  );
};

export default withRouter(MemberDetailContainer);
