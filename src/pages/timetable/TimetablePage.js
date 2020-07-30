import React, { useEffect } from 'react';
// import TimetableListContainer from '../../containers/timetable/TimetableListContainer';

import SidebarHeader from '../../components/common/SidebarHeader';
import SidebarMenu from '../../components/common/SidebarMenu';
import SidebarFooter from '../../SidebarFooter';
import { useSelector, useDispatch } from 'react-redux';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import { withRouter } from 'react-router-dom';

const TimetablePage = () => {
  return (
    <div>
      <h1>시간표 </h1>
    </div>
  );
};
export default TimetablePage;
