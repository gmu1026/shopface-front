import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const TimeTableListForm = ({
  loading,
  handleDateSelect,
  handleEventClick,
  events,
}) => {
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">전체 시간표</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth',
                    }}
                    initialView="dayGridMonth"
                    editable={false}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateSelect}
                    //eventContent={renderEventContent} // custom render function
                    eventClick={handleEventClick}
                    //eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                    /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                      */
                    events={events}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTableListForm;
