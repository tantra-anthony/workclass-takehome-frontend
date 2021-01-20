import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useLanguage from '../../utils/hooks/useLanguage';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { searchCompanies } from '../../store/companies/actions';
import { RootState } from '../../store';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { getPicsumImageUri } from '../../utils/common';
import { useHistory } from 'react-router-dom';

const COMPANY_PER_PAGE = 6;

const styles = makeStyles(() => ({
  media: {
    height: 140,
  },
  card: {
    height: '100%',
  },
}));

const mapStateToProps = (state: RootState) => {
  const { byId, allId, count } = state.companies;
  return {
    companies: allId.map((id) => byId[id]),
    pages: Math.ceil(count / COMPANY_PER_PAGE),
  };
};

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type CompanyListProps = ReduxProps;

interface CompanyCardProps {
  imageUri: string;
  title: string;
  description: string;
  onClick?: () => void;
}

function CompanyCard(props: CompanyCardProps) {
  const { imageUri, title, description, onClick } = props;
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick ? onClick : () => {}}>
        <CardMedia
          className={classes.media}
          image={imageUri}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function CompanyList(props: CompanyListProps) {
  const { companies, pages } = props;
  const { t } = useLanguage();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(
      searchCompanies({
        limit: COMPANY_PER_PAGE,
        offset: (page - 1) * COMPANY_PER_PAGE,
      }),
    );
  }, [page, dispatch]);

  function onPressCompanyEntry(id: string) {
    history.push(`/companies/${id}`);
  }

  return (
    <Container maxWidth="lg">
      <Box marginY={3}>
        <Grid spacing={2} container alignItems="stretch" justify="center">
          {companies.map((company, idx) => (
            <Grid item xs={12} sm={6} md={4}>
              <CompanyCard
                onClick={() => onPressCompanyEntry(company.id.toString())}
                imageUri={getPicsumImageUri(page + idx)}
                title={company.name}
                description={t('jobs_number', { count: company.jobCount || 0 })}
              />
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} container alignItems="center" justify="center">
          <Box marginTop={2}>
            <Pagination
              onChange={(_, page) => setPage(page)}
              count={pages}
              variant="outlined"
              color="primary"
            />
          </Box>
        </Grid>
      </Box>
    </Container>
  );
}

export default connector(CompanyList);
