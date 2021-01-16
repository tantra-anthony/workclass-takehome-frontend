import { AppThunk } from '..';
import { Job } from '../../services/jobs/types';
import {
  JobsActionTypes,
  SEARCH_JOBS_ERROR,
  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
} from './types';

export function searchJobs(): AppThunk {
  return async (dispatch) => {
    dispatch(searchJobsRequest());
  };
}

function searchJobsRequest(): JobsActionTypes {
  return {
    type: SEARCH_JOBS_REQUEST,
  };
}

function searchJobsSuccess(jobs: Job[]): JobsActionTypes {
  return {
    type: SEARCH_JOBS_SUCCESS,
    jobs,
  };
}

function searchJobsError(error: string): JobsActionTypes {
  return {
    type: SEARCH_JOBS_ERROR,
    error,
  };
}
