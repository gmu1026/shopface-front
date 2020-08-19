import React from 'react';
import Button from '../common/Button';

const EmployDetailForm = ({
  employs,
  onSubmit,
  onChange,
  error,
  onDisabled,
  onInvite,
}) => {
  if (employs === null) {
    return <div>loading...</div>;
  } else {
    return (
      <>
        <div>
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">근무자 상세 조회</h1>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title">근무자 기본정보</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={onSubmit}>
                      <div className="col-12 col-lg-6">
                        {/* <div className="form-group">
                          <label>이름</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={onChange}
                            value={employ.name !== null ? employ.name : ''}
                          />
                        </div> */}
                        {/* <div className="form-group">
                          <label>전화번호</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone"
                            readOnly
                            value={employs.phone !== null ? employs.phone : ''}
                          />
                        </div>
                        <div className="form-group">
                          <label>이메일</label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            readOnly
                            value={employs.email !== null ? employs.email : ''}
                          />
                        </div>
                        <div className="form-group">
                          <label>은행 명</label>
                          <input
                            type="text"
                            className="form-control"
                            name="bankName"
                            readOnly
                            value={employs.bankName}
                          />
                        </div>
                        <div className="form-group">
                          <label>계좌번호</label>
                          <input
                            type="text"
                            className="form-control"
                            name="accountNum"
                            readOnly
                            value={
                              employs.accountNum !== null
                                ? employs.accountNum
                                : ''
                            }
                          />
                        </div> */}
                        <div className="form-group">
                          <label>급여</label>
                          <input
                            type="text"
                            className="form-control"
                            name="salary"
                            onChange={onChange}
                            value={employs.salary !== null ? employs.salary : 0}
                            // value={
                            //   employs.salary !== null ? employs.salary : ''
                            // }
                          />
                        </div>
                        <div className="mb-3">
                          <Button
                            type="button"
                            className="btn btn-primary"
                            onClick={onDisabled}
                          >
                            비활성화
                          </Button>
                          <Button className="btn btn-primary">수정</Button>
                          <Button
                            type="button"
                            to="/employ"
                            className="btn btn-primary"
                          >
                            취소
                          </Button>

                          {employs.state === 'D' ? (
                            <Button
                              className="btn btn-primary mr-1 ml-1"
                              onClick={onInvite}
                            >
                              다시 초대하기
                            </Button>
                          ) : (
                            ''
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default EmployDetailForm;
