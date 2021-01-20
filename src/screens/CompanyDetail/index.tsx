import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { requestFindCompanyById } from '../../services/companies';
import { Job } from '../../services/jobs/types';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { formatISODate } from '../../utils/common';

const styles = makeStyles(() => ({
  media: {
    height: 140,
  },
  card: {
    height: '100%',
  },
}));

interface CompanyDetailProps {}

interface CompanyDetailParams {
  id: string;
}

function CompanyDetail(props: CompanyDetailProps) {
  const classes = styles();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [companyName, setCompanyName] = useState<string>('');
  const { id } = useParams<CompanyDetailParams>();

  useEffect(() => {
    if (!id) {
      return;
    }

    requestFindCompanyById(id).then((company) => {
      if (company.jobs) {
        setJobs(company.jobs);
      }
      setCompanyName(company.name);
    });
  }, [id]);

  return (
    <Container maxWidth="md">
      <Box marginTop={4}>
        <Paper>
          <CardContent>
            <Typography variant="h3">
              <b>{companyName}</b>
            </Typography>
            <Box marginY={2}>
              <Divider />
            </Box>
            <Grid spacing={2} container alignItems="stretch">
              {jobs.map((job) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card} variant="outlined">
                    <CardMedia
                      className={classes.media}
                      image={job.logoUrl}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {job.jobTitle}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {formatISODate(job.date, 'LL')}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Paper>
      </Box>
    </Container>
  );
}

export default CompanyDetail;
