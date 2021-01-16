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

function CompanyList() {
  const classes = styles();
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <Typography>{t('companies')}</Typography>
    </div>
  );
}

export default CompanyList;
