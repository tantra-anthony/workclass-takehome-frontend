import { toQueryString } from '../../utils/common';
import { get } from '../http';
import { Job } from '../jobs/types';
import {
  CompaniesSearchResult,
  CompaniesSearchQueryParam,
  Company,
} from './types';

export async function requestSearchCompanies(
  query: CompaniesSearchQueryParam,
): Promise<CompaniesSearchResult> {
  const qstring = toQueryString(query);
  return (await get<CompaniesSearchResult>(`companies/search${qstring}`)).data;
}

export async function requestFindCompanyJobsById(
  companyId: string,
): Promise<Job[]> {
  return (await get<Job[]>(`companies/${companyId}/jobs`)).data;
}

export async function requestFindCompanyById(
  companyId: string,
): Promise<Company> {
  return (await get<Company>(`companies/${companyId}`)).data;
}
