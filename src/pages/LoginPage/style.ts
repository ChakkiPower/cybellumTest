import { Grid, styled } from '@mui/material';

export const MainPageContainer = styled(Grid)({
  padding: '70px 0px',
});

export const LoginFormContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    justifyContent: 'center',
    aligntItems: 'center',
  },
}));

export const BackgroundImage = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  },
}));
