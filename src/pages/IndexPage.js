import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';

const IndexPage = () => {
  const events = [
    {
      id: 1,
      title: `today's event`,
      start: '2020-08-07 16:00',
      end: '2020-08-08 18:00',
      color: 'black',
    },
  ];

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    console.log(selectInfo);
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    /* this.setState({
      currentEvents: events,
    }); */
  };

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
                  <div className="row">
                    <div className="col-sm-12 col-md-6"></div>
                    <div className="col-sm-12 col-md-6"></div>
                  </div>
                  <>
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
                      //weekends={this.state.weekendsVisible}
                      //initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                      select={handleDateSelect}
                      //eventContent={renderEventContent} // custom render function
                      eventClick={handleEventClick}
                      eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                      /* you can update a remote database when these fire:
                        eventAdd={function(){}}
                        eventChange={function(){}}
                        eventRemove={function(){}}
                      */
                      events={events}
                    />
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
