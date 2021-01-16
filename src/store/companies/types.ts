import { Company } from '../../services/companies/types';

export const SEARCH_COMPANIES_REQUEST = 'SEARCH_COMPANIES_REQUEST';
export const SEARCH_COMPANIES_SUCCESS = 'SEARCH_COMPANIES_SUCCESS';
export const SEARCH_COMPANIES_ERROR = 'SEARCH_COMPANIES_ERROR';

interface SearchCompaniesRequestAction {
  type: typeof SEARCH_COMPANIES_REQUEST;
}

interface SearchCompaniesSuccessAction {
  type: typeof SEARCH_COMPANIES_SUCCESS;
  companies: Company[];
}

interface SearchCompaniesErrorAction {
  type: typeof SEARCH_COMPANIES_ERROR;
  error: string;
}

export type CompaniesActionTypes =
  | SearchCompaniesRequestAction
  | SearchCompaniesSuccessAction
  | SearchCompaniesErrorAction;

interface CompaniesByIdState {
  [id: string]: Company;
}

export interface CompaniesState {
  fetching: boolean;
  byId: CompaniesByIdState;
  allId: string[];
}
