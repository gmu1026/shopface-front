import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimetableListForm from '../../components/timetable/TimetableListForm';
import { getTimetableList } from '../../modules/timetable/timetableList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import TimeTableModalForm from '../../components/timetable/TimeTableModalForm';
import { getOccupationList } from '../../modules/occupation/occupation';
const TimetableListContainer = () => {
  const [modalType, setModalType] = useState('');
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const {
    timetables,
    timetableError,
    loading,
    user,
    occupations,
    selectedBranch,
  } = useSelector(({ loading, auth, occupation, branchSelect }) => ({
    //timetables: timetableList.timetables,
    //timetableError: timetableList.timetableError,
    loading: loading,
    user: auth.user,
    occupations: occupation.occupations,
    selectedBranch: branchSelect.selectedBranch,
  }));

  const events = [
    {
      id: 1,
      title: `today's event`,
      start: '2020-08-07 16:32',
      end: '2020-08-08 18:00',
      color: 'black',
    },
  ];

  const handleDateSelect = (selectInfo) => {
    const today = new Date();
    if (
      Date.parse(selectInfo.startStr) < Date.parse(today.toLocaleDateString())
    ) {
      alert('시간표를 등록할 수 없습니다.');

      return;
    }

    setModalType('post');
    openModal();

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
    /*  if (title) {
      calendarApi.addEvent({
        id: 1,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      }); */
  };

  const handleEventClick = (clickInfo) => {
    console.log(clickInfo);
    setModalType('update');
    openModal();
  };

  const handleEvents = (events) => {
    //alert('handleEvent');
    /* this.setState({
      currentEvents: events,
    }); */
  };

  const onSelectChange = (e) => {
    // 업무 수정 시 업무 색상 변경
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      if (selectedBranch !== '') {
        dispatch(getOccupationList({ selectedBranch }));
      }
      dispatch(getTimetableList());
    }
  }, [dispatch, selectedBranch, user]);

  return (
    <>
      <TimetableListForm
        loading={loading}
        handleEventClick={handleEventClick}
        handleDateSelect={handleDateSelect}
        handleEvents={handleEvents}
        events={events}
      />
      <TimeTableModalForm
        occupations={occupations}
        show={show}
        closeModal={closeModal}
        modalType={modalType}
        onChange={onSelectChange}
      />
    </>
  );
};

export default withRouter(TimetableListContainer);
