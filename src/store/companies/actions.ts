import { AppThunk } from '..';
import { Company } from '../../services/companies/types';
import {
  CompaniesActionTypes,
  SEARCH_COMPANIES_REQUEST,
  SEARCH_COMPANIES_ERROR,
  SEARCH_COMPANIES_SUCCESS,
} from './types';

export function searchCompanies(): AppThunk {
  return async (dispatch) => {
    dispatch(searchCompaniesRequest());
  };
}

function searchCompaniesRequest(): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_REQUEST,
  };
}

export function searchCompaniesSuccess(companies: Company[]): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_SUCCESS,
    companies,
  };
}

export function searchCompaniesError(error: string): CompaniesActionTypes {
  return {
    type: SEARCH_COMPANIES_ERROR,
    error,
  };
}
