import React, { useState, useEffect } from 'react';
import AuthCodeForm from '../../components/common/AuthCordForm';
import AuthTemplate from '../../components/common/AuthTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { checkCertCode, changeInput } from '../../modules/common/certCode';
import { withRouter } from 'react-router-dom';

const AuthCodeContainer = ({ history }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { certCode, certCodeResult, certCodeError, user } = useSelector(
    ({ certCode, auth }) => ({
      certCode: certCode.certCode,
      certCodeError: certCode.certCodeError,
      certCodeResult: certCode.certCodeResult,
      user: auth.user,
    }),
  );

  const onChange = (e) => {
    const certCode = e.target.value;
    dispatch(changeInput({ certCode }));

    setError('');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (certCode === '') {
      setError('빈칸을 모두 입력해주세요');

      return;
    }
    dispatch(checkCertCode({ certCode }));
  };

  useEffect(() => {
    if (certCodeResult) {
      history.push('/register');
    }
  });

  useEffect(() => {
    if (user !== null) {
      history.push('/');
    }
  }, [user, history]);

  useEffect(() => {
    if (certCodeError != null) {
      setError(certCodeError);
    }
  }, [certCodeError]);

  return (
    <>
      <AuthTemplate>
        <AuthCodeForm onChange={onChange} onSubmit={onSubmit} error={error} />
      </AuthTemplate>
    </>
  );
};

export default withRouter(AuthCodeContainer);
