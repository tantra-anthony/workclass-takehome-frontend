import { AppThunk } from '..';
import { Job, JobsSearchQueryParams } from '../../services/jobs/types';
import { requestSearchJobs } from '../../services/jobs';
import {
  JobsActionTypes,
  SEARCH_JOBS_ERROR,
  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
} from './types';

export function searchJobs(query: JobsSearchQueryParams): AppThunk {
  return async (dispatch) => {
    dispatch(searchJobsRequest());

    return requestSearchJobs(query)
      .then((data) => {
        dispatch(searchJobsSuccess(data.jobs, data.count));
      })
      .catch((e) => {
        dispatch(searchJobsError(e));
      });
  };
}

function searchJobsRequest(): JobsActionTypes {
  return {
    type: SEARCH_JOBS_REQUEST,
  };
}

function searchJobsSuccess(jobs: Job[], count: number): JobsActionTypes {
  return {
    type: SEARCH_JOBS_SUCCESS,
    jobs,
    count,
  };
}

function searchJobsError(error: string): JobsActionTypes {
  return {
    type: SEARCH_JOBS_ERROR,
    error,
  };
}
