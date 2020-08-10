import React from 'react';
import Modal from '../../../node_modules/react-bootstrap/esm/Modal';
import Button from '../common/Button';
import { TimePicker } from 'antd';
import moment from 'moment';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Form } from '../../../node_modules/react-bootstrap/esm/index';

const TimeTableModalForm = ({ show, closeModal, modalType, occupations }) => {
  const { RangePicker } = TimePicker;
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>시간표</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                이름
              </label>
              <div className="col-sm-10">
                <Form.Control
                  as="select"
                  name="employ"
                  className=" col-sm-4"
                  //value={modalType === 'update' ? '최민영' : ''}
                >
                  <option>최민영</option>
                  <option>남광성</option>
                </Form.Control>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                시간
              </label>
              <div className="col-sm-10">
                <RangePicker format={'HH:mm'}></RangePicker>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-form-label col-sm-2 text-sm-right">
                업무
              </label>
              <div className="col-sm-10">
                <div className="row m-1">
                  <Form.Control
                    as="select"
                    name="occupation"
                    className=" col-sm-4"
                    // value={modalType === 'update' ? occupations[0].name : ''}
                  >
                    {occupations != null && occupations.length > 0 ? (
                      occupations.map((occupation, index) => (
                        <option key={index} value={occupation.no}>
                          {occupation.name}
                        </option>
                      ))
                    ) : (
                      <div>업무를 등록해주세요</div>
                    )}
                  </Form.Control>
                  <Form.Control
                    as="input"
                    type="color"
                    name="color"
                    placeholder="업무"
                    className=" col-sm-4 ml-3"
                    value={modalType === 'update' ? occupations[0].color : ''}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {modalType === 'post' ? (
            <Button>시간표 등록</Button>
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

export default TimeTableModalForm;
