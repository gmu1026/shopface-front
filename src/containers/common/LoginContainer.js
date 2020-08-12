import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/common/AuthForm';
import { changeInput, login } from '../../modules/common/auth';
import AuthTemplate from '../../components/common/AuthTemplate';
import { withRouter } from 'react-router-dom';
import { initializeForm } from '../../modules/common/authCode';

const LoginForm = ({ history, match }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, user, authError, authCode, authCodeResult } = useSelector(
    ({ auth, authCode }) => ({
      form: auth.login,
      user: auth.user,
      authError: auth.authError,
      authCode: authCode.authCode,
      authCodeResult: authCode.authCodeResult,
    }),
  );

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeInput({
        type: 'login',
        id: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { id, password } = form;
    if ([id, password].includes('')) {
      setError('빈 칸을 모두 입력하세요');

      return;
    }
    dispatch(login({ id, password }));
    if (authCodeResult === 200) {
      dispatch(initializeForm());
      // 인증 성공
      //dispatch(회원이랑 지점 매핑)
      // 성공 하면 폼 초기화
    }
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
    setError(null);
  }, [dispatch]);

  useEffect(() => {
    if (authError !== null) {
      if (authError === 'Incorrect username or password.') {
        setError('아이디 또는 비밀번호가 틀렸습니다.');
        return;
      }
      if (authError === 'User is not confirmed.') {
        setError('이메일 구독확인이 되지 않았습니다. 이메일을 확인 하세요');
        return;
      }
      setError(authError);
    }
  }, [authError]);

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthTemplate>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </AuthTemplate>
  );
};

export default withRouter(LoginForm);
