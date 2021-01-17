import { CompaniesActionTypes, CompaniesState } from './types';

const initialState: CompaniesState = {
  fetching: false,
  byId: {},
  allId: [],
};

function companies(
  state = initialState,
  action: CompaniesActionTypes,
): CompaniesState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default companies;
