import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/common/AuthForm';
import {
  changeInput,
  initializeForm,
  registerMember,
} from '../../modules/common/auth';
import AuthTemplate from '../../components/common/AuthTemplate';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history, match }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { register, user, authError, isRegister } = useSelector(({ auth }) => ({
    register: auth.register,
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
    let member = Object.assign({}, register);
    if (
      [
        member.id,
        member.password,
        member.name,
        member.phone,
        member.email,
      ].includes('')
    ) {
      setError('빈칸을 모두 입력해주세요');
      return;
    }
    if (match.url === '/register') {
      member.type = 'B';
    } else {
      member.type = 'E';
    }
    dispatch(registerMember({ member }));
  };

  useEffect(() => {
    setError(null);
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if (authError !== null) {
      setError(authError);
    }
  }, [authError]);

  useEffect(() => {
    if (isRegister === 200) {
      history.push('/login');
    }
  }, [history, isRegister]);

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  });

  return (
    <AuthTemplate>
      <AuthForm
        type="register"
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </AuthTemplate>
  );
};

export default withRouter(RegisterForm);
