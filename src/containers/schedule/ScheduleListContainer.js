import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { getScheduleList } from '../../modules/schedule/scheduleList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const ScheduleListContainer = () => {
  const classes = useStyles();

  const { schedules, scheduleError, loading } = useSelector(
    ({ scheduleList, loading }) => ({
      schedules: scheduleList.schedules,
      scheduleError: scheduleList.scheduleError,
      loading: loading,
    }),
  );
  console.log(schedules);
  const dispatch = useDispatch();

  useEffect(() => {
    if (schedules !== null) {
      dispatch(getScheduleList());
    }
  }, [dispatch, schedules]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <ScheduleListForm
            schedules={schedules}
            scheduleError={scheduleError}
            loading={loading}
          ></ScheduleListForm>
        </Container>
      </main>
    </div>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    // position: 'relative',
    // whiteSpace: 'nowrap',
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff',
  },
  content: {
    position: 'relative',
    left: '100px',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default withRouter(ScheduleListContainer);
