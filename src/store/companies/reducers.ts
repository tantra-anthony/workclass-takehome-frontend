import produce from 'immer';
import {
  CompaniesActionTypes,
  CompaniesState,
  SEARCH_COMPANIES_ERROR,
  SEARCH_COMPANIES_REQUEST,
  SEARCH_COMPANIES_SUCCESS,
  CompaniesByIdState,
} from './types';

const initialState: CompaniesState = {
  fetching: false,
  byId: {},
  allId: [],
  count: 0,
};

function companies(
  state = initialState,
  action: CompaniesActionTypes,
): CompaniesState {
  switch (action.type) {
    case SEARCH_COMPANIES_SUCCESS: {
      return produce(state, (draft) => {
        const allId: string[] = [];
        const byId: CompaniesByIdState = {};
        action.companies.forEach((company) => {
          allId.push(company.id.toString());
          byId[company.id] = company;
        });

        draft.allId = allId;
        draft.byId = byId;
        draft.fetching = false;
        draft.count = action.count;
      });
    }
    case SEARCH_COMPANIES_REQUEST: {
      return produce(state, (draft) => {
        draft.fetching = true;
      });
    }
    case SEARCH_COMPANIES_ERROR: {
      return produce(state, (draft) => {
        draft.fetching = false;
      });
    }
    default: {
      return state;
    }
  }
}

export default companies;
