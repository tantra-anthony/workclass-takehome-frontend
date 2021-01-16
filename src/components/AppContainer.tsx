import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useLanguage from '../utils/hooks/useLanguage';

const styles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
}));

interface AppContainerProps {
  children: React.ReactNode;
}

function AppContainer(props: AppContainerProps) {
  const { children } = props;
  const classes = styles();
  const { t } = useLanguage();

  return <div className={classes.container}>{children}</div>;
}

export default AppContainer;
