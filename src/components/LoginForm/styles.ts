import { Box, Button, styled, Typography } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  paddingTop: '120px',
  [theme.breakpoints.down('xl')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const WelcomeMessage = styled(Typography)({
  marginTop: '32px',
});

export const LoginFormContainer = styled(Box)({
  marginTop: '36px',
  width: '60%',
});

export const ForgotPassword = styled(Button)(({ theme }) => ({
  padding: 0,
  textTransform: 'none',
  color: theme.palette.secondary.light,
}));

export const Login = styled(Button)({
  marginTop: '36px',
});

export const PasswordWrapper = styled(Box)({
  marginTop: '26px',
});
