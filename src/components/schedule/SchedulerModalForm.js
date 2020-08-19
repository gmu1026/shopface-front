import React from 'react';
import Button from '../common/Button';
import { TimePicker } from 'antd';
import { Modal } from 'rsuite';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form } from '../../../node_modules/react-bootstrap/esm/index';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
  margin-left: 1rem;
`;

const SchedulerModalForm = ({
  show,
  closeModal,
  modalType,
  occupations,
  employs,
  onChange,
  onTimeChange,
  onSchedulePost,
  error,
}) => {
  const { RangePicker } = TimePicker;
  let filterEmploys = null;
  if (employs !== null && employs !== []) {
    filterEmploys = employs.filter((employ) => employ.state === 'E');
  }
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === 'post' ? '시간표 등록' : '시간표 수정'}
          </Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body>
          <form>
            <div className="form-group row col-sm-10">
              <label className="col-form-label col-sm-2 text-sm-right">
                이름
              </label>
              <div className="col-sm-9">
                <Form.Control
                  as="select"
                  name="employNo"
                  className=" col-sm-9"
                  onChange={onChange}
                  //value={modalType === 'update' ? '최민영' : ''}
                >
                  <option>근무자를 선택하세요</option>
                  {filterEmploys !== null &&
                    filterEmploys !== [] &&
                    filterEmploys.map((employ, index) => (
                      <option key={index} value={employ.no}>
                        {employ.name}
                      </option>
                    ))}
                </Form.Control>
              </div>
            </div>
            <div className="form-group row col-sm-10">
              <label className="col-form-label col-sm-2 text-sm-right">
                시간
              </label>
              <div className="col-sm-9">
                <RangePicker
                  format={'HH:mm'}
                  onChange={onTimeChange}
                ></RangePicker>
              </div>
            </div>
            <div className="form-group row col-sm-10">
              <label className="col-form-label col-sm-2 text-sm-right">
                업무
              </label>
              <div className="col-sm-9">
                <div className="row m-1">
                  <Form.Control
                    as="select"
                    name="occupationNo"
                    className=" col-sm-7"
                    onChange={onChange}
                    //value={modalType === 'post' ? occupations[0].name : ''}
                  >
                    <option>업무를 선택하세요</option>
                    {occupations != null && occupations.length > 0 ? (
                      occupations.map((occupation, index) => (
                        <option key={index} value={occupation.no}>
                          {occupation.name}
                        </option>
                      ))
                    ) : (
                      <option>업무를 등록해주세요</option>
                    )}
                  </Form.Control>
                  <Form.Control
                    as="input"
                    type="color"
                    name="color"
                    placeholder="업무"
                    className=" col-sm-4 ml-3"
                    onChange={onChange}
                    //value={modalType === 'update' ? occupations[0].color : ''}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <ErrorMessage>{error}</ErrorMessage>
        <hr />
        <Modal.Footer>
          {modalType === 'post' ? (
            <Button onClick={onSchedulePost}>시간표 등록</Button>
          ) : (
            <>
              <Button>수정</Button>
              <Button>삭제</Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SchedulerModalForm;
