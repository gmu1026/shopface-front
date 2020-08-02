import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EmployListForm from '../../components/employ/EmployListForm';
import { getEmployList, changeInput } from '../../modules/employ/employList';
import { checkExpire } from '../../lib/api/common/authAPI';
import { logout } from '../../modules/common/auth';

const EmployListContainer = () => {
  const [filterEmploys, setFilterEmploys] = useState(null);
  const dispatch = useDispatch();
  const { employs, employError, loading, user, name } = useSelector(
    ({ employList, loading, auth }) => ({
      employs: employList.employs,
      employError: employList.employError,
      loading: loading,
      user: auth.user,
      name: employList.name,
    }),
  );

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(changeInput(value));
  };
  const onSearch = () => {
    const searchName = name;
    const filterEmploys = employs.filter((employ) =>
      employ.name.toLowerCase().includes(searchName),
    );
    setFilterEmploys(filterEmploys);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  useEffect(() => {
    if (user !== null) {
      checkExpire().then((isExpired) => {
        if (isExpired) {
          dispatch(logout());
        }
      });
      dispatch(getEmployList());
    }
  }, [dispatch, user]);

  return (
    <EmployListForm
      employs={employs}
      employError={employError}
      loading={loading}
      onChange={onChange}
      onSearch={onSearch}
      onKeyPress={onKeyPress}
      filterEmploys={filterEmploys}
    ></EmployListForm>
  );
};

export default withRouter(EmployListContainer);
