import moment from 'moment';
import React, { useEffect } from 'react';
import Scheduler, {
  DATE_FORMAT,
  SchedulerData,
  ViewTypes,
} from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkExpire, logout } from '../../lib/api/common/authAPI';
import { getScheduleList } from '../../modules/schedule/scheduleList';

const ScheduleListContainer = () => {
  const { schedules, scheduleError, loading, user } = useSelector(
    ({ scheduleList, loading, auth }) => ({
      schedules: scheduleList.schedules,
      scheduleError: scheduleList.scheduleError,
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
      dispatch(getScheduleList());
    }
  }, [dispatch, user]);

  let schedulerData = new SchedulerData(
    new moment().format(DATE_FORMAT),
    ViewTypes.Week,
  );

  let events = [
    {
      id: 1,
      start: '2020-08-09 09:30:00',
      end: '2020-08-11 23:30:00',
      resourceId: 'r1',
      title: 'I am finished',
      bgColor: '#D9D9D9',
    },
    {
      id: 2,
      start: '2020-08-10 09:30:00',
      end: '2020-08-11 09:30:00',
      resourceId: 'r2',
      title: 'I am not resizable',
      resizable: false,
    },
    {
      id: 3,
      start: '2020-08-13 09:30:00',
      end: '2020-08-15 10:30:00',
      resourceId: 'r3',
      title: 'I am not movable',
      movable: false,
    },
    {
      id: 3,
      start: '2020-08-14 09:30:00',
      end: '2020-08-15 10:30:00',
      resourceId: 'r3',
      title: 'I am not movable',
      movable: false,
    },
  ];
  schedulerData.setEvents(events);

  const prevClick = (schedulerData) => {
    schedulerData.prev();
    //schedulerData.setEvents(DemoData.events);
    /*  this.setState({
      viewModel: schedulerData,
    }); */
  };

  const nextClick = (schedulerData) => {
    schedulerData.next();
    //schedulerData.setEvents(DemoData.events);
    /*  this.setState({
      viewModel: schedulerData,
    }); */
  };

  const onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective,
    );
    // schedulerData.setEvents(DemoData.events);
    /* this.setState({
      viewModel: schedulerData,
    }); */
  };

  const onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    //schedulerData.setEvents(DemoData.events);
    /*  this.setState({
      viewModel: schedulerData,
    }); */
  };

  const eventClicked = (schedulerData, event) => {
    alert(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`,
    );
  };

  return (
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">회원 목록</h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <Scheduler
                  schedulerData={schedulerData}
                  prevClick={prevClick}
                  nextClick={nextClick}
                  onSelectDate={onSelectDate}
                  onViewChange={onViewChange}
                  eventItemClick={eventClicked}
                ></Scheduler>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleListContainer;
