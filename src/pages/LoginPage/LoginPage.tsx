import { Grid } from '@mui/material';
import Twins from '../../assets/images/imac_dig_twins.png';
import { Footer, LoginForm } from '../../components';
import { BackgroundImage, LoginFormContainer, MainPageContainer } from './style';

const LoginPage = () => {
  return (
    <MainPageContainer container>
      <LoginFormContainer item xs={12} xl={5} display="flex" justifyContent="flex-end" height="80vh" zIndex={1000}>
        <LoginForm />
      </LoginFormContainer>
      <BackgroundImage item xs={12}>
        <img src={Twins} alt="Twins" />
      </BackgroundImage>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </MainPageContainer>
  );
};

export { LoginPage };
