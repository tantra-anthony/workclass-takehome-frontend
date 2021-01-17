import React from 'react';
import useLanguage from '../../utils/hooks/useLanguage';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';

const links = [
  {
    key: 'jobs',
    route: '/jobs',
  },
  {
    key: 'companies',
    route: '/companies',
  },
];

function Home() {
  const { t } = useLanguage();
  const history = useHistory();

  function onButtonPressed(route: string) {
    history.push(route);
  }

  return (
    <Container maxWidth="lg">
      <Grid container>
        {links.map((item) => (
          <Grid key={item.key} xs={12} md={6} item>
            <Box marginX={1} marginTop={2}>
              <Button
                onClick={() => onButtonPressed(item.route)}
                variant="contained"
                color="primary"
                fullWidth
              >
                {t(`navigation.${item.key}`)}
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
