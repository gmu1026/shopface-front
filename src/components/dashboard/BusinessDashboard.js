import React from 'react';
import Clock from 'react-live-clock';
// import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
const DashboardTableBody = ({ dashboard }) => {
  return (
    <>
      <tr role="row">
        <td>{dashboard.employName}</td>
        <td>{dashboard.occupationName}</td>
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}
        </td>
        <td>{dashboard.hoursPlan}</td>
        <td>{dashboard.salaryPlan}</td>
        <td>{dashboard.scheduleStatus}</td>
        <td>{dashboard.actualWorkingHours}</td>
        <td>{dashboard.actualSalary}</td>
      </tr>

      {/* <tr role="row2">
        <td>{dashboard.employName}</td>
        <td>{dashboard.occupationName}</td>
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}
        </td>
        <td>{dashboard.hoursPlan}</td>
        <td>{dashboard.salaryPlan}</td>
        <td>{dashboard.actualWorkingHours}</td>
        <td>{dashboard.actualSalary}</td>
        <td>{dashboard.scheduleStatus}</td>
      </tr>

      <tr role="row3">
        <td>{dashboard.employName}</td>
        <td>{dashboard.occupationName}</td>
        <td>
          {dashboard.workStartTime}~{dashboard.workEndTime}
        </td>
        <td>{dashboard.hoursPlan}</td>
        <td>{dashboard.salaryPlan}</td>
        <td>{dashboard.actualWorkingHours}</td>
        <td>{dashboard.actualSalary}</td>
        <td>{dashboard.scheduleStatus}</td>
      </tr> */}
    </>
  );
};

const BusinessDashboard = ({ business, error, loading, match }) => {
  return (
    <div className="container-fluid p-0">
      <h1 className="h3 mb-3">근무 현황</h1>
      {/*  <Clock format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} /> */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group" />
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
                  <h5>근무중</h5>
                  <table
                    className="table table-striped dataTable no-footer dtr-inline"
                    role="grid"
                    aria-describedby="datatables-buttons_info"
                  >
                    <thead>
                      <tr role="row">
                        <th>근무자</th>
                        <th>담당 업무</th>
                        <th>스케줄</th>
                        <th>예상 시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제시간</th>
                        <th>실제 급여</th>
                      </tr>
                      {/* 근무예정
                      <tr role="row">
                        <th>근무자</th>
                        <th>담당 업무</th>
                        <th>스케줄</th>
                        <th>예상 시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제 시간</th>
                        <th>실제 급여</th>
                      </tr>
                      근무완료
                      <tr role="row">
                        <th>근무자</th>
                        <th>담당 업무</th>
                        <th>스케줄</th>
                        <th>예상 시간</th>
                        <th>예상급여</th>
                        <th>상태</th>
                        <th>실제 시간</th>
                        <th>실제 급여</th>
                      </tr> */}
                    </thead>
                    <tbody>
                      {business !== null ? (
                        business.map((dashboard, index) => (
                          <DashboardTableBody
                            key={index}
                            match={match}
                            dashboard={dashboard}
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
export default withRouter(BusinessDashboard);
