import React from 'react';
import Button from '../common/Button';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
// import spectrum from '../../spect';

const ErrorMessage = styled.div`
  color: red;
  text-align: left;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const OccupationTableBody = ({ occupation, onChange, onDelete, onSubmit }) => {
  return (
    <>
      <tr role="row">
        <td>
          {/* <input type="text" value={occupation.name} onChange={onChange} /> */}
          {occupation.name}
        </td>
        <td>{occupation.color}</td>
        <td>
          <Button className="btn btn-primary">수정</Button>
          <Button className="btn btn-primary" onClick={onDelete}>
            삭제
          </Button>
        </td>
      </tr>
    </>
  );
};

const OccupationListForm = ({
  occupations,
  occupationError,
  loading,
  onSubmit,
  onChange,
  error,
  handleComplete,
  name,
  color,
}) => {
  return (
    <>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">업무 관리</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="col-sm-6">
                  <form onSubmit={onSubmit}>
                    <div className="row">
                      <div>
                        <div className="row"></div>
                        <div>
                          업무명:
                          <input
                            type="text"
                            className="form-control ml-2 mr-2"
                            name="name"
                            onChange={onChange}
                          />
                          <br />
                        </div>
                      </div>
                      <div>
                        색상:
                        <input
                          className="form-control ml-2 mr-2"
                          type="color"
                          id="color"
                          name="color"
                          onChange={onChange}
                        />
                      </div>
                      <div className="ml-4 mr-2">
                        <ErrorMessage>{error}</ErrorMessage>
                        <Button className="btn btn-primary" name="postBtn">
                          등록
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  id="datatables-buttons_wrapper"
                  className="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="datatables-buttons"
                        className="table table-striped dataTable no-footer dtr-inline"
                        role="grid"
                        aria-describedby="datatables-buttons_info"
                      >
                        <thead id="table_head">
                          <tr role="row">
                            <th>업무</th>
                            <th>색상</th>
                            <th>관리</th>
                          </tr>
                        </thead>
                        <tbody id="table-body">
                          {occupations !== null && occupations.length > 0 ? (
                            occupations.map((occupation, index) => (
                              <OccupationTableBody
                                key={index}
                                occupation={occupation}
                              ></OccupationTableBody>
                            ))
                          ) : (
                            <>
                              <tr role="row">
                                <td colSpan="4">등록된 업무가 없습니다.</td>
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
        </div>
      </div>
    </>
  );
};
export default withRouter(OccupationListForm);
