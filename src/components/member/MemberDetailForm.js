import React from 'react';
import Modal from 'react-bootstrap/Modal';
import DaumPostcode from 'react-daum-postcode';
import Button from '../common/Button';

const MemberDetailForm = ({
  member,
  onSubmit,
  onChange,
  onDelete,
  error,
  handleComplete,
  closeModal,
  openModal,
  show,
  disabled,
}) => {
  if (member === null) {
    return <div></div>;
  } else {
    return (
      <>
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">회원 정보</h1>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-group col-md-4">
                      <label>이름 :</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={onChange}
                        value={member.name}
                        disabled={disabled}
                      />
                    </div>
                    <br />
                    {/*     <div className="form-group col-md-4">
                      비밀번호 :
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        onChange={onChange}
                      />
                      <button
                      type="button"
                      id="password_edit_button"
                      className="btn btn-outline-primary"
                    >
                      비밀번호 수정
                    </button> 
                    </div> */}

                    <div className="form-group col-md-4">
                      전화번호 :
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        onChange={onChange}
                        value={member.phone}
                        disabled={disabled}
                      />
                      <br />
                    </div>
                    <div className="form-group col-md-4">
                      이메일 :
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={member.email !== null ? member.email : ''}
                        onChange={onChange}
                        disabled={disabled}
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
                        onChange={onChange}
                        disabled={disabled}
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
                        onChange={onChange}
                        disabled={disabled}
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-4">
                      <label>우편 번호 :</label>
                      {!disabled && (
                        <Button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={openModal}
                        >
                          우편번호 찾기
                        </Button>
                      )}

                      <Modal show={show} onHide={closeModal}>
                        <Modal.Header closeButton>
                          <Modal.Title>우편 번호 찾기</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <DaumPostcode onComplete={handleComplete} />
                        </Modal.Body>
                      </Modal>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={member.zipCode !== null ? member.zipCode : ''}
                        disabled={disabled}
                        onChange={() => {}}
                      />
                      <br />
                      <div className="text-center-mt-3"></div>
                    </div>
                    <div className="form-group col-md-4">
                      <label>주소 :</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={member.address !== null ? member.address : ''}
                        disabled={disabled}
                        onChange={() => {}}
                      />
                      <br />
                    </div>

                    <div className="form-group col-md-2">
                      상세 주소 :
                      <input
                        type="text"
                        className="form-control"
                        name="detailAddress"
                        onChange={onChange}
                        value={
                          member.detailAddress !== null
                            ? member.detailAddress
                            : ''
                        }
                        disabled={disabled}
                      />
                      <br />
                    </div>
                    <div className="form-group" style={{ color: 'red' }}>
                      {error}
                    </div>
                    {!disabled && (
                      <Button className="btn btn-outline-primary">수정</Button>
                    )}
                    {disabled && (
                      <>
                        <Button
                          type="button"
                          onClick={onDelete}
                          className="btn btn-outline-primary"
                        >
                          삭제
                        </Button>
                        <Button
                          type="button"
                          to="/member"
                          className="btn btn-outline-primary"
                        >
                          목록
                        </Button>
                      </>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default MemberDetailForm;
