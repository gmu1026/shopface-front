import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/common/AuthForm';
import { changeInput, initializeForm, login } from '../../modules/common/auth';
import AuthTemplate from '../../components/common/AuthTemplate';
import { withRouter } from 'react-router-dom';
import { tempSetUser } from '../../modules/member/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
  }));

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
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('에러 발생');
      console.log(authError);
      return;
    }
  }, [auth, authError]);

  useEffect(() => {
    if (auth.name !== '') {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(auth));
        dispatch(tempSetUser(auth));
      } catch (e) {
        console.log('local storage에 저장 되지 않았습니다.');
      }
    }
  }, [dispatch, history, auth]);

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
