import React, { useState, useEffect } from 'react';
import AuthCodeForm from '../../components/common/AuthCordForm';
import AuthTemplate from '../../components/common/AuthTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { checkAuthCode, changeInput } from '../../modules/common/authCode';
import { withRouter } from 'react-router-dom';

const AuthCodeContainer = ({ history }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { authCode, authCodeResult, authCodeError, user } = useSelector(
    ({ authCode, auth }) => ({
      authCode: authCode.authCode,
      authCodeError: authCode.authCodeError,
      authCodeResult: authCode.authCodeResult,
      user: auth.user,
    }),
  );

  const onChange = (e) => {
    const authCode = e.target.value;
    dispatch(changeInput({ authCode }));

    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (authCode === '') {
      setError('빈칸을 모두 입력해주세요');

      return;
    }
    dispatch(checkAuthCode({ authCode }));
  };

  useEffect(() => {
    if (authCodeResult === 200) {
      history.push('/register/employ');
    }
  });

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  }, [user, history]);

  useEffect(() => {
    if (authCodeError != null) {
      setError(authCodeError);
    }
  }, [authCodeError]);

  return (
    <>
      <AuthTemplate>
        <AuthCodeForm onChange={onChange} onSubmit={onSubmit} error={error} />
      </AuthTemplate>
    </>
  );
};

export default withRouter(AuthCodeContainer);
