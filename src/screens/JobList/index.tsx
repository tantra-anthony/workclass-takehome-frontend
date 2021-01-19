import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { searchJobs } from '../../store/jobs/actions';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Pagination from '@material-ui/lab/Pagination';

const JOB_PER_PAGE = 6;

const styles = makeStyles(() => ({
  media: {
    height: 140,
  },
  card: {
    height: '100%',
  },
}));

const mapStateToProps = (state: RootState) => {
  const { byId, allId, count } = state.jobs;
  return {
    jobs: allId.map((id) => byId[id]),
    pages: Math.ceil(count / JOB_PER_PAGE),
  };
};

const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;
type JobListProps = ReduxProps;

interface JobCardProps {
  imageUri: string;
  title: string;
  description: string;
}

function JobCard(props: JobCardProps) {
  const { imageUri, title, description } = props;
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
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

function JobList(props: JobListProps) {
  const { jobs, pages } = props;
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      searchJobs({
        limit: JOB_PER_PAGE,
        offset: (page - 1) * JOB_PER_PAGE,
      }),
    );
  }, [page, dispatch]);

  return (
    <Container maxWidth="lg">
      <Box marginY={3}>
        <Grid spacing={2} container alignItems="stretch" justify="center">
          {jobs.map((job) => (
            <Grid item xs={12} sm={6} md={4}>
              <JobCard
                imageUri={job.logoUrl}
                title={job.jobTitle}
                description={job.company ? job.company.name : ''}
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

export default connector(JobList);
