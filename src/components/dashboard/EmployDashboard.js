import React from 'react';
import Button from '../common/Button';
import { withRouter } from 'react-router-dom';
const RTableBody = ({ emp, onWork, onQuit }) => {
  return (
    <>
      <tr role="row">
        <td>
          {emp.workStartTime}~{emp.workEndTime}_{emp.branchName}(
          {emp.occupationName})
        </td>
        <td>
          <Button
            type="button"
            className="btn btn-outline-primary"
            onClick={onWork}
            value={emp.no}
          >
            출근
          </Button>
          <Button className="btn btn-primary" onClick={onQuit} value={emp.no}>
            퇴근
          </Button>
        </td>
      </tr>
    </>
  );
};

const WTableBody = ({ emp, onWork, onQuit }) => {
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
        <td>
          {emp.state === 'R'
            ? '근무중'
            : emp.state === 'W'
            ? '근무 예정'
            : '근무 완료'}
        </td>
        <td>{emp.actualWorkingHours}</td>
        <td>{emp.actualSalary}</td>
        <td>
          <Button>요청하기</Button>
        </td>
      </tr>
    </>
  );
};

const CTableBody = ({ emp, onWork, onQuit }) => {
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
        <td>
          {emp.state === 'R'
            ? '근무중'
            : emp.state === 'W'
            ? '근무 예정'
            : '근무 완료'}
        </td>
        <td>{emp.actualWorkingHours}</td>
        <td>{emp.actualSalary}</td>
        <td>
          <Button>요청하기</Button>
        </td>
      </tr>
    </>
  );
};

const EmployDashboard = ({ employ, error, loading, match, onWork, onQuit }) => {
  return (
    <div className="container-fluid p-0">
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
                <h5>현재 스케줄</h5>
                <table
                  className="table table-striped dataTable no-footer dtr-inline"
                  role="grid"
                  aria-describedby="datatables-buttons_info"
                >
                  {/* <thead>
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
                  </thead> */}
                  <tbody>
                    {employ !== null && employ.length > 0 ? (
                      employ.map((emp, index) => (
                        <RTableBody
                          key={index}
                          emp={emp}
                          onWork={onWork}
                          onQuit={onQuit}
                        ></RTableBody>
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

                <h5>예정스케줄</h5>
                <table
                  className="table table-striped dataTable no-footer dtr-inline"
                  role="grid"
                  aria-describedby="datatables-buttons_info"
                >
                  <thead>
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
                  <tbody>
                    {employ !== null && employ.length > 0 ? (
                      employ.map((emp, index) => (
                        <WTableBody key={index} emp={emp}></WTableBody>
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
                <h5>지난스케줄</h5>
                <table
                  className="table table-striped dataTable no-footer dtr-inline"
                  role="grid"
                  aria-describedby="datatables-buttons_info"
                >
                  <thead>
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
                  <tbody>
                    {employ !== null && employ.length > 0 ? (
                      employ.map((emp, index) => (
                        <CTableBody key={index} emp={emp}></CTableBody>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(EmployDashboard);
