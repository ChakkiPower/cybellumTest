import { InputLabel, styled } from '@mui/material';

export const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
  marginLeft: '15px',
  color: theme.palette.secondary.light,
}));
