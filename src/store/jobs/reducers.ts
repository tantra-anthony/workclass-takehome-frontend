import produce from 'immer';
import {
  JobsActionTypes,
  JobsState,
  SEARCH_JOBS_ERROR,
  SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
  JobsByIdState,
} from './types';

const initialState: JobsState = {
  fetching: false,
  byId: {},
  allId: [],
  count: 0,
};

function jobs(state = initialState, action: JobsActionTypes): JobsState {
  switch (action.type) {
    case SEARCH_JOBS_REQUEST: {
      return produce(state, (draft) => {
        draft.fetching = true;
      });
    }
    case SEARCH_JOBS_SUCCESS: {
      return produce(state, (draft) => {
        const allId: string[] = [];
        const byId: JobsByIdState = {};
        action.jobs.forEach((job) => {
          allId.push(job.id.toString());
          byId[job.id] = job;
        });

        draft.allId = allId;
        draft.byId = byId;
        draft.count = action.count;
        draft.fetching = false;
      });
    }
    case SEARCH_JOBS_ERROR: {
      return produce(state, (draft) => {
        draft.fetching = false;
      });
    }
    default: {
      return state;
    }
  }
}

export default jobs;
