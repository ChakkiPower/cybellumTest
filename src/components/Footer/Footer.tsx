import { Typography } from '@mui/material';
import { FC } from 'react';
import { FooterContainer } from './styles';

const Footer: FC = () => {
  return (
    <FooterContainer direction="row" spacing={5}>
      <Typography>Privacy policy</Typography>
      <Typography>Terms of use</Typography>
      <Typography>Contact us</Typography>
    </FooterContainer>
  );
};

export { Footer };
