import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useLanguage from '../../utils/hooks/useLanguage';
import Container from '@material-ui/core/Container';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function Home() {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Typography>{t('home')}</Typography>
      </div>
    </Container>
  );
}

export default Home;
