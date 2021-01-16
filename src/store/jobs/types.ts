import { Job } from '../../services/jobs/types';

export const SEARCH_JOBS_REQUEST = 'SEARCH_JOBS_REQUEST';
export const SEARCH_JOBS_SUCCESS = 'SEARCH_JOBS_SUCCESS';
export const SEARCH_JOBS_ERROR = 'SEARCH_JOBS_ERROR';

interface SearchJobsRequestAction {
  type: typeof SEARCH_JOBS_REQUEST;
}

interface SearchJobsSuccessAction {
  type: typeof SEARCH_JOBS_SUCCESS;
  jobs: Job[];
}

interface SearchJobsErrorAction {
  type: typeof SEARCH_JOBS_ERROR;
  error: string;
}

export type JobsActionTypes =
  | SearchJobsRequestAction
  | SearchJobsSuccessAction
  | SearchJobsErrorAction;

interface JobsByIdState {
  [id: string]: Job;
}

export interface JobsState {
  fetching: boolean;
  byId: JobsByIdState;
  allId: string[];
}
