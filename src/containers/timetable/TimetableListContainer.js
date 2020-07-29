import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimetableListForm from '../../components/timetable/TimetableListForm';
import { getTimetableList } from '../../modules/timetable/timetableList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const TimetableListContainer = () => {
  const classes = useStyles();
  const { timetables, timetableError, loading } = useSelector(
    ({ timetableList, loading }) => ({
      timetables: timetableList.timetables,
      timetableError: timetableList.timetableError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (timetables !== null) {
      dispatch(getTimetableList());
    }
  }, [dispatch, timetables]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <TimetableListForm
            timetables={timetables}
            timetableError={timetableError}
            loading={loading}
          ></TimetableListForm>
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
export default withRouter(TimetableListContainer);