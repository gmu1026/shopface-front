import React from 'react';
// import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
const DashboardTableBody = ({ emp }) => {
  return (
    <>
      <tr role="row">
        <td>{emp.branchName}</td>
        <td>{emp.occupationName}</td>
        <td>
          {emp.workStartTime}~{emp.workEndTime}
        </td>
        <td>{emp.hoursPlan}</td>
        <td>{emp.salaryPlan}</td>
        <td>{emp.scheduleStatus}</td>
        <td>{emp.actualWorkingHours}</td>
        <td>{emp.actualSalary}</td>
      </tr>
    </>
  );
};

const EmployDashboard = ({ employ, error, loading, match }) => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group" id="check-disable" />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="row">
                      <div className="form-inline col-5"></div>
                      <div className="form-inline col ml-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <table
                    className="table table-striped dataTable no-footer dtr-inline"
                    role="grid"
                    aria-describedby="datatables-buttons_info"
                  >
                    <thead>
                      근무중
                      <tr role="row">
                        <th>근무지</th>
                        <th>담당 업무</th>
                        <th>스케줄</th>
                        <th>예상 시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제시간</th>
                        <th>실제 급여</th>
                      </tr>
                    </thead>
                    <tbody id="table_body">
                      {employ !== null && employ.length > 0 ? (
                        employ.map((emp, index) => (
                          <DashboardTableBody
                            key={index}
                            match={match}
                            emp={emp}
                          ></DashboardTableBody>
                        ))
                      ) : (
                        <>
                          <tr role="row">
                            <td colSpan="4">데이터가 없습니다.</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(EmployDashboard);
