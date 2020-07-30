import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RecordListForm from '../../components/record/RecordListForm';
import { getRecordList } from '../../modules/record/recordList';

const RecordListContainer = () => {
  const { records, recordError, loading } = useSelector(
    ({ recordList, loading }) => ({
      records: recordList.records,
      recordError: recordList.recordError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecordList());
  }, [dispatch]);

  return (
    <RecordListForm
      records={records}
      recordError={recordError}
      loading={loading}
    ></RecordListForm>
  );
};

export default withRouter(RecordListContainer);
