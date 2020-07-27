import React from 'react';
const OccupationList = () => {
  return (
    <div className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">업무 관리</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="col-sm-6">
                  <form>
                    <input
                      type="hidden"
                      id="occupationNo-input"
                      name="branchNo"
                    />
                    <label for="occupationLabel">업무 명: </label>
                    <input
                      type="text"
                      className="form-control ml-2 mr-2"
                      id="occupation-input"
                      name="name"
                    />

                    <label for="occupationColor" className="mr-2">
                      색상:
                    </label>
                    <input type="text" id="occupation-color" name="color" />
                    <div className="ml-4 mr-2">
                      <button
                        type="button"
                        className="btn btn-primary"
                        id="post-button"
                        name="postBtn"
                      >
                        등록
                      </button>
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
                        <thead>
                          <tr role="row">
                            <th>업무</th>
                            <th>색상</th>
                            <th>관리</th>
                          </tr>
                        </thead>
                        <tbody id="table-body"></tbody>
                      </table>
                      <div
                        className="modal fade"
                        id="color-modal-form"
                        tabindex="-1"
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
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body m-3">
                              <label
                                for="occupation-color-modal"
                                className="mr-2"
                              >
                                색상:
                              </label>
                              <input
                                type="text"
                                id="modal-color"
                                name="modalColor"
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-dismiss="modal"
                              >
                                취소
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary"
                                id="change-color-button"
                              >
                                선택
                              </button>
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
export default OccupationList;
