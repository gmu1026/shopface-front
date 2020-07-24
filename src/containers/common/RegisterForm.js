import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/common/AuthForm';
import {
  changeInput,
  initializeForm,
  register,
} from '../../modules/common/auth';
import AuthTemplate from '../../components/common/AuthTemplate';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, isRegister } = useSelector(({ auth }) => ({
    form: auth.register,
    user: auth.user,
    authError: auth.authError,
    isRegister: auth.isRegister,
  }));

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeInput({
        type: 'register',
        id: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;
    if ([id, password].includes('')) {
      setError('빈칸을 모두 입력해주세요');
      return;
    }
    dispatch(register({ id, password }));
    history.push('/login');
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (isRegister) {
      history.push('/login');
    }
  }, [history, isRegister]);

  return (
    <AuthTemplate>
      <AuthForm
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
};

export default withRouter(RegisterForm);
