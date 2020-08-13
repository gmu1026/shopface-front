import React from 'react';
import moment from 'moment';
import Scheduler, {
  SchedulerData,
  ViewTypes,
  DATE_FORMAT,
} from 'react-big-scheduler';

const ScheduleListForm = ({ schedulerData }) => {
  return (
    <div>
      <Scheduler
        schedulerData={schedulerData}
        // prevClick={schedulerData.prevClick}
        // nextClick={schedulerData.nextClick}
        // onSelectDate={schedulerData.onSelectDate}
        // onViewChange={schedulerData.onViewChange}
        // eventItemClick={schedulerData.eventClicked}
      />
    </div>
  );
};

export default ScheduleListForm;
