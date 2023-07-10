import { Stack, styled } from '@mui/material';

export const FooterContainer = styled(Stack)(({ theme }) => ({
  paddingLeft: '160px',
  marginTop: '70px',
  [theme.breakpoints.down('xl')]: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
}));
