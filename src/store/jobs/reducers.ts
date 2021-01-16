import produce from 'immer';
import { JobsActionTypes, JobsState } from './types';

const initialState: JobsState = {
  fetching: false,
  byId: {},
  allId: [],
};

function jobs(state = initialState, action: JobsActionTypes): JobsState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default jobs;
