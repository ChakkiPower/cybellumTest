import { Card, CardContent, Typography } from '@mui/material';
import logo from '../../assets/images/cybellum-logo-vertical-black.svg';
import { useGetNotification } from '../../hooks/getNotification';
import { CardMedia, PageWrapper } from './styles';

const MainPage = () => {
  const { data, error, loading } = useGetNotification();

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  return (
    <PageWrapper>
      <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
        <CardContent>
          <CardMedia component="img" alt="Cybellum" image={logo} />
          <Typography gutterBottom variant="h5" component="div" sx={{ mt: 4 }}>
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export { MainPage };
