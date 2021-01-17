import { AppThunk } from '..';
import { requestSearchCompanies } from '../../services/companies';
import {
  CompaniesSearchQueryParam,
  Company,
} from '../../services/companies/types';
import {
  CompaniesActionTypes,
  SEARCH_COMPANIES_REQUEST,
  SEARCH_COMPANIES_ERROR,
  SEARCH_COMPANIES_SUCCESS,
} from './types';

export function searchCompanies(query: CompaniesSearchQueryParam): AppThunk {
  return async (dispatch) => {
    dispatch(searchCompaniesRequest());

    return requestSearchCompanies(query)
      .then((data) => {
        dispatch(searchCompaniesSuccess(data.companies, data.count));
      })
      .catch((e) => {
        dispatch(searchCompaniesError(e));
      });
  };
}

function searchCompaniesRequest(): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_REQUEST,
  };
}

function searchCompaniesSuccess(
  companies: Company[],
  count: number,
): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_SUCCESS,
    companies,
    count,
  };
}

function searchCompaniesError(error: string): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_ERROR,
    error,
  };
}
