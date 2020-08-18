//1. import
import React, { useState, useEffect } from 'react';
import { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
import DragDropContext from './DndContext';
import { withRouter } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import SchedulerModalForm from '../../components/schedule/SchedulerModalForm';
import { useSelector, useDispatch } from 'react-redux';
import { checkExpire, logout } from '../../lib/api/common/authAPI';
import {
  getScheduleList,
  changeInput,
  initializeForm,
} from '../../modules/schedule/scheduleList';
import { getOccupationList } from '../../modules/occupation/occupation';
import { getEmployList } from '../../modules/employ/employList';

const ScheduleListContainer = ({ history }) => {
  moment.locale('en');
  const dispatch = useDispatch();
  const {
    schedules,
    schedulePost,
    scheduleError,
    loading,
    user,
    occupations,
    selectedBranch,
    employs,
  } = useSelector(
    ({
      scheduleList,
      loading,
      auth,
      occupation,
      branchSelect,
      employList,
    }) => ({
      schedules: scheduleList.schedules,
      schedulePost: scheduleList.post,
      scheduleError: scheduleList.scheduleError,
      loading: loading,
      user: auth.user,
      occupations: occupation.occupations,
      selectedBranch: branchSelect.selectedBranch,
      employs: employList.employs,
    }),
  );

  const [schedulerData, setSchedulerData] = useState(
    new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week),
  );
  const [targetTime, settargetTime] = useState(null);
  const [modalType, setModalType] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
    setError('');
  };
  const openModal = () => setShow(true);

  let events = [
    {
      id: 1,
      start: '2020-08-18 09:30:00',
      end: '2020-08-19 23:30:00',
      resourceId: 'r1',
      title: 'I am finished',
      bgColor: '#D9D9D9',
    },
    {
      id: 2,
      start: '2020-08-18 12:30:00',
      end: '2020-08-26 23:30:00',
      resourceId: 'r2',
      title: 'I am not resizable',
      resizable: false,
    },
    {
      id: 3,
      start: '2020-08-19 12:30:00',
      end: '2020-08-20 23:30:00',
      resourceId: 'r3',
      title: 'I am not movable',
      movable: false,
    },
    {
      id: 4,
      start: '2020-08-19 14:30:00',
      end: '2020-08-20 23:30:00',
      resourceId: 'r1',
      title: 'I am not start-resizable',
      startResizable: false,
    },
  ];

  const prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(events);
    console.log(schedulerData);
    setSchedulerData(schedulerData);
    history.push('/schedule');
  };

  const nextClick = (schedulerData) => {
    schedulerData.next();
    schedulerData.setEvents(events);
    setSchedulerData(schedulerData);
    history.push('/schedule');
  };

  const onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(
      view.viewType,
      view.showAgenda,
      view.isEventPerspective,
    );
    schedulerData.setEvents(schedulerData.events);
    setSchedulerData(schedulerData);
    history.push('/schedule');
  };

  const onSelectDate = (schedulerData, date) => {
    console.log('onSelectDate');
    schedulerData.setDate(date);
    schedulerData.setEvents(schedulerData.events);
    setSchedulerData(schedulerData);
    history.push('/schedule');
  };

  // 등록 된 이벤트 클릭 시
  const eventClicked = (schedulerData, event) => {
    console.log(
      `You just clicked an event: {id: ${event.id}, title: ${event.title}}`,
    );
    setModalType('post'); // 추후 update 수정
    openModal();
  };

  const onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(schedulerData.events);
      setSchedulerData(schedulerData);

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  const onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      setSchedulerData(schedulerData);

      schedulerContent.scrollLeft = 10;
    }
  };

  const onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollTop');
  };

  const onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollBottom');
  };

  const toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    setSchedulerData(schedulerData);
  };

  // 빈 칸 클릭했을 때
  const newEvent = (
    schedulerData,
    slotId,
    slotName,
    start,
    end,
    type,
    item,
  ) => {
    settargetTime(start);
    const today = new moment().format(DATE_FORMAT);
    if (start < today) {
      alert('시간표를 등록할 수 없습니다.');

      return;
    }
    setModalType('post');
    openModal();
  };

  const nonAgendaCellHeaderTemplateResolver = (
    schedulerData,
    item,
    formattedDateItems,
    style,
  ) => {
    let datetime = schedulerData.localeMoment(item.time);
    let isCurrentDate = false;

    if (schedulerData.viewType === ViewTypes.Day) {
      isCurrentDate = datetime.isSame(new Date(), 'hour');
    } else {
      isCurrentDate = datetime.isSame(new Date(), 'day');
    }

    if (isCurrentDate) {
      style.backgroundColor = '#118dea';
      style.color = 'white';
    }
    return (
      <th key={item.time} className={`header3-text`} style={style}>
        {formattedDateItems.map((formattedItem, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{
              __html: formattedItem.replace(/[0-9]/g, '<b>$&</b>'),
            }}
          />
        ))}
      </th>
    );
  };

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    dispatch(changeInput({ key, value }));

    setError('');
  };

  const onTimeChange = (time, timeString) => {
    if (timeString !== null) {
      const startTime = timeString[0];
      const endTime = timeString[1];
      const today = new Date().getDate();
      const clickDate = new Date(targetTime).getDate();
      if (startTime < moment().format('HH:mm') && today === clickDate) {
        setError('시간을 다시 선택해주세요');

        return;
      }
      dispatch(changeInput({ key: 'workStartTime', value: startTime }));
      dispatch(changeInput({ key: 'workEndTime', value: endTime }));

      setError('');
    }
  };

  const onSchedulePost = () => {
    const data = schedulePost;
    if (
      [
        data.employNo,
        data.workStartTime,
        data.workEndTime,
        data.occupationNo,
        data.color,
      ].includes('')
    ) {
      setError('값을 모두 선택해주세요');
      return;
    }

    //dispatch(postSchedule())
    initializeForm('post');
    closeModal();
  };

  useEffect(() => {
    schedulerData.config.schedulerWidth = '80%';
    if (employs !== null) {
      const filterEmploys = employs.filter((employ) => employ.state === 'E');
      const employResources = filterEmploys.map((employ) => ({
        id: employ.no,
        name: employ.name,
      }));
      schedulerData.setResources(employResources);
    } else {
      schedulerData.setResources([]);
    }

    if (schedules !== null) {
      const scheduleEvents = schedules.map((schedule) => ({
        id: schedule.no,
        start: schedule.workStartTime,
        end: schedule.workEndTime,
        resourceId: schedule.employNo,
        title: schedule.name,
        bgColor: schedule.color,
      }));
      schedulerData.setEvents(scheduleEvents);
    } else {
      schedulerData.setEvents([]);
    }
  }, [employs, schedulerData, schedules, events]);

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });

      if (selectedBranch !== '') {
        dispatch(getOccupationList({ selectedBranch }));
        dispatch(getEmployList({ selectedBranch }));

        dispatch(getScheduleList({ id: user.name }));
      }
    }
  }, [dispatch, selectedBranch, user]);

  return (
    <>
      <ScheduleListForm
        schedulerData={schedulerData}
        prevClick={prevClick}
        nextClick={nextClick}
        onSelectDate={onSelectDate}
        onViewChange={onViewChange}
        eventItemClick={eventClicked}
        onScrollLeft={onScrollLeft}
        onScrollRight={onScrollRight}
        onScrollTop={onScrollTop}
        onScrollBottom={onScrollBottom}
        toggleExpandFunc={toggleExpandFunc}
        newEvent={newEvent}
        nonAgendaCellHeaderTemplateResolver={
          nonAgendaCellHeaderTemplateResolver
        }
      />
      <SchedulerModalForm
        occupations={occupations}
        show={show}
        closeModal={closeModal}
        employs={employs}
        modalType={modalType}
        onChange={onChange}
        onTimeChange={onTimeChange}
        onSchedulePost={onSchedulePost}
        error={error}
      />
    </>
  );
};

export default DragDropContext(withRouter(ScheduleListContainer));
