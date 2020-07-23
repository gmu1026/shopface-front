import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/common/AuthForm';
import { changeInput, initializeForm } from '../../modules/common/auth';
import AuthTemplate from '../../components/common/AuthTemplate';
import { withRouter } from 'react-router-dom';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
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
    //TODO 추후 작성
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

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
