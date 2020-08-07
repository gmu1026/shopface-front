import React, { useState, useEffect } from 'react';
import { Form } from '../../../node_modules/react-bootstrap/esm/index';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelect } from '../../modules/common/select';

const SelectBox = ({ branchs }) => {
  const dispatch = useDispatch();
  const { selectedBranch } = useSelector(({ select }) => ({
    selectedBranch: select.selectedBranch,
  }));

  const onChange = (e) => {
    dispatch(changeSelect(e.target.value));
  };

  useEffect(() => {
    if (branchs != null && branchs.length > 0 && selectedBranch === '') {
      console.log(branchs[0].no);
      dispatch(changeSelect(branchs[0].no));
    }
  }, [branchs, selectedBranch, dispatch]);

  return (
    <div>
      <Form.Group>
        <Form.Control as="select" value={selectedBranch} onChange={onChange}>
          {branchs != null && branchs.length > 0 ? (
            branchs.map((branch, index) => (
              <option key={index} value={branch.no}>
                {branch.name}
              </option>
            ))
          ) : (
            <option>사업장을 등록하세요</option>
          )}
        </Form.Control>
      </Form.Group>
    </div>
  );
};

export default SelectBox;
