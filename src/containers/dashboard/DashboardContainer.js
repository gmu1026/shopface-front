import React from 'react';
import { withRouter } from 'react-router-dom';
import DashboardForm from '../../components/record/RecordListForm';
// import { checkExpire } from '../../lib/api/common/authAPI';
// import { logout } from '../../modules/common/auth';
// import { useDispatch, useSelector } from 'react-redux';

const DashboardContainer = () => {
  return <DashboardForm></DashboardForm>;
};

export default withRouter(DashboardContainer);
