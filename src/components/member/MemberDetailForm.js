import React from 'react';
import Button from '../common/Button';

const MemberDetailForm = ({ member }) => {
  if (member === null) {
    return <div>test</div>;
  } else {
    return (
      <div>
        <div className="container-fluid p-0">
          <h1>회원 정보</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <form>
                    <div className="form-group col-md-4">
                      이름 :
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={member.name}
                        readOnly
                      />
                    </div>

                    <div className="form-group col-md-4">
                      전화번호 :
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={member.phone}
                        readOnly
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-4">
                      이메일 :
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={member.email}
                        readOnly
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-4">
                      은행 명 :
                      <input
                        type="text"
                        className="form-control"
                        name="bankName"
                        value={member.bankName !== null ? member.bankName : ''}
                        readOnly
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-4">
                      계좌번호 :
                      <input
                        type="text"
                        className="form-control"
                        name="accountNum"
                        value={
                          member.accountNum !== null ? member.accountNum : ''
                        }
                        readOnly
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-4">
                      주소 :
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={member.address !== null ? member.address : ''}
                        readOnly
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-2">
                      상세 주소 :
                      <input
                        type="text"
                        className="form-control"
                        name="detailAddress"
                        value={
                          member.detailAddress !== null
                            ? member.detailAddress
                            : ''
                        }
                        readOnly
                      />
                      <br />
                    </div>
                    <Button
                      type="Button"
                      to="/member"
                      className="btn btn-outline-primary"
                    >
                      목록
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MemberDetailForm;
