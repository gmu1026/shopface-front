import React from 'react';
// import Button from '../common/Button';

// const ScheduleTableBody = ({ schedule }) => {
//   return (
//     <>
//       <tr role="row">
//         <td>{schedule.no}</td>
//         <td>{schedule.name}</td>
//         <td>{schedule.memberId}</td>
//         <td>{schedule.state}</td>
//       </tr>
//     </>
//   );
// };
//schedules, scheduleError, loading
const ScheduleListForm = () => {
  return (
    <div class="container-fluid p-0">
      <h1 class="h3 mb-3">스케줄 목록</h1>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div
                id="datatables-buttons_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6"></div>
                  <div class="col-sm-12 col-md-6"></div>
                </div>
                <div id="fullcalendar"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="scheduleModal"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title">
                  <div id="edt_time">
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body m-3">
                    <div class="form-group">
                      <table
                        id="datatables-buttons"
                        class="table table-striped dataTable no-footer dtr-inline"
                        // style="width: 100%;"
                        role="grid"
                        aria-describedby="datatables-buttons_info"
                      >
                        <thead></thead>
                        <tbody id="table_body">
                          {/* {!loading && schedules !== null ? (
                            schedules.map((schedule, index) => (
                              <ScheduleTableBody
                                key={index}
                                schedule={schedule}
                              ></ScheduleTableBody>
                            ))
                          ) : (
                            <>
                              <tr role="row">
                                <td colSpan="4">등록된 스케줄이 없습니다.</td>
                              </tr>
                            </>
                          )} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="workingBtn"
                    >
                      출근
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      id="quittingBtn"
                    >
                      퇴근
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleListForm;
