import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RecordListForm from '../../components/record/RecordListForm';
import { getRecordList } from '../../modules/record/recordList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const RecordListContainer = () => {
  const { records, recordError, loading, user } = useSelector(
    ({ recordList, loading, auth }) => ({
      records: recordList.records,
      recordError: recordList.recordError,
      loading: loading,
      user: auth.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getRecordList({ id: user.name }));
    }
  }, [dispatch, user]);

  return (
    <RecordListForm
      records={records}
      recordError={recordError}
      loading={loading}
    ></RecordListForm>
  );
};

export default withRouter(RecordListContainer);
