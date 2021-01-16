import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useLanguage from '../../utils/hooks/useLanguage';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function JobList() {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <Typography>{t('jobs')}</Typography>
    </div>
  );
}

export default JobList;
