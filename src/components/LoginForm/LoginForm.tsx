import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@mui/material';
import { FC, useState } from 'react';
import type { DefaultValues, SubmitHandler } from 'react-hook-form';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import logo from '../../assets/images/logo-small.svg';

import { LoginRequest } from '../../models';
import { setAuthContext } from '../../services';
import { login } from '../../services/api';
import { RHFTextField } from '../RHFTextField/RHFTextField';

import { ForgotPassword, FormContainer, Login, LoginFormContainer, PasswordWrapper, WelcomeMessage } from './styles';

const formSchema = yup.object().shape({
  email: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const LoginForm: FC = () => {
  const [apiError, setApiError] = useState<string>('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues: DefaultValues<LoginRequest> = {
    email: '',
    password: '',
  };

  const methods = useForm<LoginRequest>({
    defaultValues,
    resolver: yupResolver(formSchema),
  });

  const handleFormSubmit: SubmitHandler<LoginRequest> = async (params) => {
    try {
      const authResponse = await login(params);
      dispatch(setAuthContext(authResponse));
      navigate('/', {
        replace: true,
      });
    } catch (error: any) {
      setApiError(error.message);
    }
  };
  return (
    <FormContainer>
      <img src={logo} alt="logo" />
      <WelcomeMessage variant="h1">
        Welcome to the
        <br /> Product Security Platform
      </WelcomeMessage>
      <FormProvider {...methods}>
        <LoginFormContainer component="form" onSubmit={methods.handleSubmit(handleFormSubmit)}>
          <RHFTextField id="username" type="email" size="small" name="email" fullWidth label="Username" />
          <PasswordWrapper>
            <RHFTextField id="password" type="password" size="small" name="password" fullWidth label="Password" />
          </PasswordWrapper>
          {apiError && (
            <Typography color="error" variant="subtitle2">
              {apiError}
            </Typography>
          )}
          <ForgotPassword variant="text" size="small">
            Forgot your password?
          </ForgotPassword>
          <Login variant="contained" fullWidth type="submit">
            Log in
          </Login>
        </LoginFormContainer>
      </FormProvider>
    </FormContainer>
  );
};

export { LoginForm };
