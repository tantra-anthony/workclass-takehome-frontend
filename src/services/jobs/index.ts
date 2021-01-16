import { toQueryString } from '../../utils/common';
import { get } from '../http';
import { Job, JobsSearchQueryParams, JobsSearchResult } from './types';

export async function searchJobs(
  query: JobsSearchQueryParams,
): Promise<JobsSearchResult> {
  const qstring = toQueryString(query);
  return (await get<JobsSearchResult>(`jobs/search${qstring}`)).data;
}

export async function fetchJobById(id: string): Promise<Job> {
  return (await get<Job>(`jobs/${id}`)).data;
}
