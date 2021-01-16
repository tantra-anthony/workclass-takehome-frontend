import { toQueryString } from '../../utils/common';
import { get } from '../http';
import { Job } from '../jobs/types';
import { CompaniesSearchResult, CompaniesSearchQueryParam } from './types';

export async function searchCompanies(
  query: CompaniesSearchQueryParam,
): Promise<CompaniesSearchResult> {
  const qstring = toQueryString(query);
  return (await get<CompaniesSearchResult>(`jobs/search${qstring}`)).data;
}

export async function findCompanyJobsById(companyId: string): Promise<Job[]> {
  return (await get<Job[]>(`${companyId}/jobs`)).data;
}
