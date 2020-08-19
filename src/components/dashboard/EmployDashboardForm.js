import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../common/Button';
const EmployDashboardTableBody = ({ match, dashboard }) => {
  return (
    <>
      <tr role="row">
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}_
          {dashboard.branchName}({dashboard.occupationName})
        </td>
        <Button>출근하기</Button>
        <Button>퇴근하기</Button>
      </tr>

      <tr role="row">
        <td>{dashboard.branchName}</td>
        <td>{dashboard.occupationName}</td>
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}
        </td>
        <td>{dashboard.hoursPlan}</td>
        <td>{dashboard.salaryPlan}</td>
        <td>{dashboard.actualWorkingHours}</td>
        <td>{dashboard.actualSalary}</td>
        <td>{dashboard.division}</td>
      </tr>

      <tr role="row">
        <td>{dashboard.branchName}</td>
        <td>{dashboard.occupationName}</td>
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}
        </td>
        <td>{dashboard.hoursPlan}</td>
        <td>{dashboard.salaryPlan}</td>
        <td>{dashboard.actualWorkingHours}</td>
        <td>{dashboard.actualSalary}</td>
        <td>{dashboard.division}</td>
      </tr>
    </>
  );
};

const EmployDashboardForm = ({
  employDashboards,
  businessDashboards,
  dashboardError,
  loading,
  match,
}) => {
  return (
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">근무 현황</h1>
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
                      <tr role="row">
                        예정 스케줄
                        <th>근무지</th>
                        <th>담당 업무(업무명)</th>
                        <th>스케줄(근무 시작~근무 종료)</th>
                        <th>예상시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제시간</th>
                        <th>실제 급여</th>
                      </tr>
                      <br></br>
                      <tr>
                        지난 스케줄
                        <th>근무지</th>
                        <th>담당 업무(업무명)</th>
                        <th>스케줄</th>
                        <th>예상 시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제 시간</th>
                        <th>실제 급여</th>
                      </tr>
                    </thead>

                    {/* <tbody id="table_body">
                      {employDashboards !== null ? (
                        employDashboards.map((dashboard, index) => (
                          <EmployDashboardTableBody
                            key={index}
                            match={match}
                            dashboard={dashboard}
                          ></EmployDashboardTableBody>
                        ))
                      ) : (
                        <>
                          {' '}
                          <tr role="row">
                            <td colSpan="4">데이터가 없습니다.</td>
                          </tr>
                        </>
                      )}
                    </tbody> */}
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
export default withRouter(EmployDashboardForm);
