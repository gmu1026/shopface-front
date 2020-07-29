import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RecordListForm from '../../components/record/RecordListForm';
import { getRecordList } from '../../modules/record/recordList';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SideBarMenu from '../../components/common/SidebarMenu';
import Drawer from '@material-ui/core/Drawer';
import SidebarHeader from '../../SidebarHeader';

const RecordListContainer = () => {
  const classes = useStyles();
  const { records, recordError, loading } = useSelector(
    ({ recordList, loading }) => ({
      records: recordList.records,
      recordError: recordList.recordError,
      loading: loading,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (records !== null) {
      dispatch(getRecordList());
    }
  }, [dispatch, records]);

  return (
    <div>
      <SidebarHeader />
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <SideBarMenu />
      </Drawer>
      <main className={classes.content}>
        <Container className={classes.container}>
          <RecordListForm
            records={records}
            recordError={recordError}
            loading={loading}
          ></RecordListForm>
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
export default withRouter(RecordListContainer);
