import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TimetableListForm from '../../components/timetable/TimetableListForm';
import {
  getTimetableList,
  getTimetable,
  changeInput,
  initializeForm,
} from '../../modules/timetable/timetableList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';
import TimeTableModalForm from '../../components/timetable/TimeTableModalForm';
import { getOccupationList } from '../../modules/occupation/occupationList';
import { getEmployList } from '../../modules/employ/employList';
import moment from 'moment';

const TimetableListContainer = () => {
  const [modalType, setModalType] = useState('');
  const [show, setShow] = useState(false);
  const [clickedDate, setClickedDate] = useState('');
  const [error, setError] = useState('');
  const closeModal = () => {
    setShow(false);
    setError('');
    setClickedDate('');
  }; // add inintForm;
  const openModal = () => setShow(true);

  const dispatch = useDispatch();
  const {
    timetables,
    timetableError,
    loading,
    user,
    occupations,
    selectedBranch,
    employs,
    postTimetable,
  } = useSelector(
    ({
      loading,
      auth,
      occupationList,
      branchSelect,
      employList,
      timetableList,
    }) => ({
      //timetables: timetableList.timetables,
      postTimetable: timetableList.post,
      //timetableError: timetableList.timetableError,
      loading: loading,
      user: auth.user,
      occupations: occupationList.occupations,
      selectedBranch: branchSelect.selectedBranch,
      employs: employList.employs,
    }),
  );

  const events = [
    {
      id: 10,
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
    setClickedDate(selectInfo.startStr);

    setModalType('post');
    openModal();

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();
  };

  const handleEventClick = (clickInfo) => {
    const no = clickInfo.event._def.publicId;
    //dispatch(getTimetable({no}))
    console.log(clickInfo);
    setModalType('update');
    openModal();
  };

  const onSelectChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    // occupation 변경 시 color 자동 변경
    if (e.target.name === 'occupationNo') {
      /*  const occupationObj = occupations.filter(
        (occupation) => occupation.no === JSON.stringify(value),
      );
      const { color } = occupationObj; */
      dispatch(changeInput({ key: 'occupationColor', value: '#0070C0' }));
    }
    dispatch(changeInput({ key, value }));

    setError('');
  };

  const onTimeChange = (time, timeString) => {
    if (timeString !== null) {
      const startTime = timeString[0];
      const endTime = timeString[1];
      const today = new Date().getDate();
      const clickDate = new Date(clickedDate).getDate();
      if (startTime < moment().format('HH:mm') && today === clickDate) {
        setError('시간을 다시 선택해주세요');

        return;
      }
      dispatch(changeInput({ key: 'startTime', value: startTime }));
      dispatch(changeInput({ key: 'endTime', value: endTime }));

      setError('');
    }
  };

  const onOccupationChange = (e) => {
    // 업무 수정 시 업무 색상 변경
    console.log(e.target.value);
  };

  const onTimetablePost = () => {
    const data = postTimetable;
    if (
      [
        data.employNo,
        data.startTime,
        data.endTime,
        data.occupationNo,
        data.occupationColor,
      ].includes('')
    ) {
      setError('값을 모두 선택해주세요');
      return;
    }

    //dispatch(postApi) post API 추가
    initializeForm('post');
    closeModal();
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
        dispatch(getEmployList({ selectedBranch }));
        dispatch(getTimetableList({ selectedBranch }));
      }
    }
  }, [dispatch, selectedBranch, user]);

  return (
    <>
      <TimetableListForm
        loading={loading}
        handleEventClick={handleEventClick}
        handleDateSelect={handleDateSelect}
        events={events}
      />
      <TimeTableModalForm
        occupations={occupations}
        show={show}
        closeModal={closeModal}
        modalType={modalType}
        employs={employs}
        onSelectChange={onSelectChange}
        onOccupationChange={onOccupationChange}
        onTimeChange={onTimeChange}
        onTimetablePost={onTimetablePost}
        error={error}
      />
    </>
  );
};

export default withRouter(TimetableListContainer);
