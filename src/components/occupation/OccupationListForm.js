import React from 'react';
import Button from '../common/Button';
// import spectrum from '../../spect';

const OccupationTableBody = ({ occupation }) => {
  return (
    <>
      <tr role="row">
        <td>{occupation.name}</td>
        <td>{occupation.color}</td>
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
}) => {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">업무 관리</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="col-sm-6">
                  <form onSubmit={onsubmit}>
                    <input
                      type="hidden"
                      id="occupationNo-input"
                      name="branchNo"
                      onChange={onChange}
                    />
                    업무 명 :
                    <input
                      type="text"
                      className="form-control ml-2 mr-2"
                      id="occupation-input"
                      name="name"
                      onChange={onChange}
                    />
                    색상:
                    <input
                      className="spectrum"
                      type="color"
                      id="occupation-color"
                      name="color"
                      onChange={onChange}
                    />
                    <div className="ml-4 mr-2">
                      <Button
                        type="button"
                        className="btn btn-primary"
                        id="post-button"
                        name="postBtn"
                      >
                        등록
                      </Button>
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
                          {!loading && occupations !== null ? (
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
                      <div
                        className="modal fade"
                        id="color-modal-form"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">색상 선택</h5>
                              <Button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </Button>
                            </div>
                            <div className="modal-body m-3">
                              색상:
                              <input
                                type="text"
                                id="modal-color"
                                name="modalColor"
                                onChange={onChange}
                              />
                            </div>
                            <div className="modal-footer">
                              <Button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                              >
                                취소
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-primary"
                                id="change-color-button"
                              >
                                선택
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default OccupationListForm;
